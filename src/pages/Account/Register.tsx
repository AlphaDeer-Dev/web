import { Input, Title1, Button, Link, Field, tokens, useId, useToastController, Toast, ToastBody, ToastFooter, ToastTitle, Toaster } from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { register } from "../../utils/api";
import { Helmet } from "react-helmet";

export default function (props: {
    setRoute: Function;
    login: boolean;
    setLogin: Function;
    username: string | null;
    setUsername: Function;
}) {
    const [pwd, setPwd] = useState<string>('');
    const [cpwd, setCpwd] = useState<string>('');
    const [pwdState, setPwdState] = useState<boolean>(true);
    const [cpwdState, setCpwdState] = useState<boolean>(true);
    const [pwdMessage, setPwdMessage] = useState<string | null>(null);
    const [cpwdMessage, setCpwdMessage] = useState<string | null>(null);
    const [btnState, setBtnState] = useState<boolean>(true);
    const [usrname, setUsrname] = useState<string>('');
    const [usrnameState, setUsrnameState] = useState<boolean>(true);
    const [usrnameMessage, setUsrnameMessage] = useState<string | null>(null);

    const id = useId("register");
    const { dispatchToast } = useToastController(id);

    const checkPasswords = function () {
        setBtnState(false);
        if (pwd.length < 8 || pwd.length > 20) {
            setPwdMessage("Expected password length between 8 and 20");
            setPwdState(false);
            setBtnState(true);
        } else {
            setPwdMessage(null);
            setPwdState(true);
        }

        if (cpwd !== pwd) {
            setCpwdMessage("Recheck your password");
            setCpwdState(false);
            setBtnState(true);
        } else {
            setCpwdMessage(null);
            setCpwdState(true);
        }
    };
    useEffect(() => {
        checkPasswords();
    }, [pwd, cpwd]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            userSelect: "none"
        }}>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Toaster toasterId={id} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: tokens.spacingVerticalL,
                maxWidth: "300px",
                width: "100%",
            }}>
                <Title1>Register</Title1>
                <Field validationState={usrnameState ? "success" : "error"} validationMessage={usrnameMessage}>
                    <Input placeholder="Username" type="text" onChange={(ev, data) => {
                        setUsrname(data.value);
                    }} />
                </Field>
                <Field validationState={pwdState ? "success" : "error"} validationMessage={pwdMessage}>
                    <Input placeholder="Password" type="password" onChange={(ev, data) => {
                        setPwd(data.value);
                    }} />
                </Field>
                <Field validationState={cpwdState ? "success" : "error"} validationMessage={cpwdMessage}>
                    <Input placeholder="Confirm password" type="password" onChange={(ev, data) => {
                        setCpwd(data.value);
                    }} />
                </Field>
                <Button appearance="primary" disabled={btnState} onClick={async () => {
                    await register(usrname, pwd).then((msg) => {
                        if (msg.success) {
                            setUsrnameMessage(null);
                            setUsrnameState(true);
                            dispatchToast(
                                <Toast>
                                    <ToastTitle>Register success!</ToastTitle>
                                </Toast>,
                                { intent: "success" }
                            );
                            props.setLogin(true);
                            props.setUsername(usrname);
                            props.setRoute("/account");
                        } else {
                            setUsrnameMessage(null);
                            setUsrnameState(true);
                            if (msg.status === 409) {
                                setUsrnameMessage(msg.message);
                                setUsrnameState(false);
                            }
                            dispatchToast(
                                <Toast>
                                    <ToastTitle>Register failed!</ToastTitle>
                                    <ToastBody>{msg.message}</ToastBody>
                                </Toast>,
                                { intent: "error" }
                            );
                        }
                    })
                }}>Click to register</Button>
                <Link onClick={() => { props.setRoute("/login") }}>Already have an account →</Link>
            </div>
        </div>
    )
}