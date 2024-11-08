import { Input, Title1, Button, Link, Field, tokens, useId, useToastController, Toast, ToastBody, ToastTitle, Toaster } from "@fluentui/react-components";
import { useState } from "react";
import { login } from "../../utils/api";
import { Helmet } from "react-helmet";

export default function Login(props: {
    setRoute: Function;
    login: boolean;
    setLogin: Function;
    username: string | null;
    setUsername: Function;
}) {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const id = useId("login");
    const { dispatchToast } = useToastController(id);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            userSelect: "none"
        }}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Toaster toasterId={id} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: tokens.spacingVerticalL,
                maxWidth: "300px",
                width: "100%",
            }}>
                <Title1>Login</Title1>
                <Field>
                    <Input placeholder="Username" type="text" onChange={(ev, data) => {
                        setUsername(data.value);
                    }} />
                </Field>
                <Field>
                    <Input placeholder="Password" type="password" onChange={(ev, data) => {
                        setPassword(data.value);
                    }} />
                </Field>
                <Button appearance="primary" onClick={async () => {
                    await login(username, password).then((msg) => {
                        if (msg.success) {
                            dispatchToast(
                                <Toast>
                                    <ToastTitle>Login success!</ToastTitle>
                                </Toast>,
                                { intent: "success" }
                            );
                            props.setLogin(true);
                            props.setUsername(username);
                            props.setRoute("/account");
                        } else {
                            if (msg.status === 401) {
                            }
                            dispatchToast(
                                <Toast>
                                    <ToastTitle>Login failed!</ToastTitle>
                                    <ToastBody>{msg.message}</ToastBody>
                                </Toast>,
                                { intent: "error" }
                            );
                        }
                    })
                }}>Click to login</Button>
                <Link onClick={() => { props.setRoute("/register") }}>Don't have an account →</Link>
            </div>
        </div>
    )
}