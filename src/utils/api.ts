import axios from 'axios';
const base = "http://localhost:3000/";
const path = {
    "register": base + "register",
    "login": base + "login",
    "changePassword": base + "changePassword"
}

export async function isServerOnline() {
    try {
        const response = await axios.get(base);
        return {
            success: true,
            message: "🟢Server is online",
            status: response.status
        };
    } catch (error) {
        return {
            success: false,
            message: "🔴Server is offline or an error occurred",
            status: null
        };
    }
}

export async function register(username: string, password: string) {
    try {
        const response = await axios.post(path.register, { "username": username, "password": password });
        return {
            success: true,
            message: response.data,
            status: response.status
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data || "An error occurred while registering.";
            return {
                success: false,
                message: errorMessage,
                status: error.response?.status
            };
        } else {
            return {
                success: false,
                // @ts-ignore
                message: error.message,
                status: null
            };
        }
    }
}

export async function login(username: string, password: string) {
    try {
        const response = await axios.post(path.login, { "username": username, "password": password });
        return {
            success: true,
            message: response.data,
            status: response.status
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data || "An error occurred while logging in.";
            return {
                success: false,
                message: errorMessage,
                status: error.response?.status
            };
        } else {
            return {
                success: false,
                // @ts-ignore
                message: error.message,
                status: null
            };
        }
    }
}

export async function changePassword(username: string, oldPassword: string, newPassword: string) {
    try {
        const response = await axios.post(path.changePassword, {
            "username": username,
            "oldPassword": oldPassword,
            "newPassword": newPassword
        });
        return {
            success: true,
            message: response.data,
            status: response.status
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorMessage = error.response?.data || "An error occurred while changing the password.";
            return {
                success: false,
                message: errorMessage,
                status: error.response?.status
            };
        } else {
            return {
                success: false,
                // @ts-ignore
                message: error.message,
                status: null
            };
        }
    }
}