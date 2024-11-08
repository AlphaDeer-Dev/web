import { useState } from "react";
import Index from "./pages/Index";
import { FluentProvider, Theme, webDarkTheme } from "@fluentui/react-components";
import Nav from "./components/Nav";
import Notfound from "./pages/Notfound";
import Account from "./pages/Account/Account";
import Register from "./pages/Account/Register";
import Login from "./pages/Account/Login";
import ChangePassword from "./pages/Account/ChangePassword";

function App() {
  const params = new URLSearchParams(window.location.search);
  const [route, _setRoute] = useState<string>(params.get('route') || "/");
  const [theme, setTheme] = useState<Theme>(webDarkTheme);
  const [login, setLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [expand, setExpand] = useState<boolean>(true)

  const setRoute = (newRoute: string) => {
    // console.log(`Redirected to ${newRoute}`);
    _setRoute(newRoute);
    const params = new URLSearchParams(window.location.search);
    params.set('route', newRoute);
    window.history.pushState({}, '', `${window.location.pathname}?${params}`);
  }

  const router: { [key: string]: JSX.Element } = {
    "/": <Index setRoute={setRoute} login={login} setLogin={setLogin} username={username} setUsername={setUsername} />,
    "/account": <Account setRoute={setRoute} login={login} setLogin={setLogin} username={username} setUsername={setUsername} />,
    "/register": <Register setRoute={setRoute} login={login} setLogin={setLogin} username={username} setUsername={setUsername} />,
    "/login": <Login setRoute={setRoute} login={login} setLogin={setLogin} username={username} setUsername={setUsername} />,
    "/changePassword": <ChangePassword setRoute={setRoute} login={login} setLogin={setLogin} username={username} setUsername={setUsername} />
  }
  return (
    <FluentProvider style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }} theme={theme} applyStylesToPortals={false}>
      <Nav setRoute={setRoute} theme={theme} setTheme={setTheme} login={login} setLogin={setLogin} username={username} setUsername={setUsername} expand={expand} setExpand={setExpand} />
      <div style={{
        position: "absolute",
        top: "40px",
        left: expand ? 250 : 0,
        padding: "10px",
        height: "calc(100% - 60px)",
        width: expand ? "calc(100% - 270px)" : "calc(100% - 20px)",
        transition: "left 200ms ease, width 200ms ease"
      }}>
        {Object.keys(router).includes(route) ? router[route] : <Notfound route={route} setRoute={setRoute} />}
      </div>
    </FluentProvider >
  );
}

export default App;