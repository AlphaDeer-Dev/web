import express from "express";
import * as fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

const dbPath = path.join("./backend", "db");
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath, { recursive: true });
}

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is online");
});

app.post("/register", async (req, res) => {
  const { username, password, ...otherInfo } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  const userDirPath = path.join(dbPath, username);
  if (fs.existsSync(userDirPath)) {
    return res.status(409).send("Username already taken.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  fs.mkdirSync(userDirPath, { recursive: true });
  fs.writeFileSync(path.join(userDirPath, "password"), hashedPassword);

  for (const [key, value] of Object.entries(otherInfo)) {
    fs.writeFileSync(
      path.join(userDirPath, `${key}.json`),
      JSON.stringify(value)
    );
  }

  res.status(201).send("User registered successfully.");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  const userDirPath = path.join(dbPath, username);
  if (!fs.existsSync(userDirPath)) {
    return res.status(401).send("Invalid username or password.");
  }

  const passwordPath = path.join(userDirPath, "password");
  const hashedPassword = fs.readFileSync(passwordPath, "utf8");
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);

  if (!isPasswordValid) {
    return res.status(401).send("Invalid username or password.");
  }

  res.send("Logged in successfully.");
});

app.post("/changePassword", async (req, res) => {
  const { username, oldPassword, newPassword } = req.body;
  if (!username || !oldPassword || !newPassword) {
    return res
      .status(400)
      .send("Username, old password, and new password are required.");
  }

  const userDirPath = path.join(dbPath, username);
  if (!fs.existsSync(userDirPath)) {
    return res.status(404).send("User not found.");
  }

  const passwordPath = path.join(userDirPath, "password");
  const hashedPassword = fs.readFileSync(passwordPath, "utf8");
  const isPasswordValid = await bcrypt.compare(oldPassword, hashedPassword);

  if (!isPasswordValid) {
    return res.status(401).send("Invalid username or old password.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedNewPassword = await bcrypt.hash(newPassword, salt);
  fs.writeFileSync(passwordPath, hashedNewPassword);

  res.send("Password changed successfully.");
});

app.listen(port, () => {
  console.clear();
  console.log(`Listening on http://localhost:${port}`);
});
