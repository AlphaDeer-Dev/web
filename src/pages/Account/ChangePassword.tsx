import { Input, Title1, Button, Field, tokens, useId, useToastController, Toast, ToastBody, ToastTitle, Toaster } from "@fluentui/react-components";
import { useState, useEffect } from "react";
import { changePassword } from "../../utils/api";
import { Helmet } from "react-helmet";

export default function ChangePassword(props: {
    setRoute: Function;
    login: boolean;
    setLogin: Function;
    username: string | null;
    setUsername: Function;
}) {
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
    const [oldPasswordState, setOldPasswordState] = useState<boolean>(true);
    const [newPasswordState, setNewPasswordState] = useState<boolean>(true);
    const [confirmPasswordState, setConfirmPasswordState] = useState<boolean>(true);
    const [oldPasswordMessage, setOldPasswordMessage] = useState<string | null>(null);
    const [newPasswordMessage, setNewPasswordMessage] = useState<string | null>(null);
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState<string | null>(null);
    const [btnState, setBtnState] = useState<boolean>(true);
    const id = useId("change-password");
    const { dispatchToast } = useToastController(id);

    useEffect(() => {
        setBtnState(false);
        if (newPassword.length < 8 || newPassword.length > 20) {
            setNewPasswordMessage("Expected password length between 8 and 20");
            setNewPasswordState(false);
            setBtnState(true);
        } else {
            setNewPasswordMessage(null);
            setNewPasswordState(true);
        }

        if (confirmPassword !== newPassword) {
            setConfirmPasswordMessage("Passwords do not match");
            setConfirmPasswordState(false);
            setPasswordMatch(false);
            setBtnState(true);
        } else {
            setConfirmPasswordMessage(null);
            setConfirmPasswordState(true);
            setPasswordMatch(true);
        }
    }, [newPassword, confirmPassword]);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNewPassword(value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setConfirmPassword(value);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            userSelect: "none"
        }}>
            <Helmet>
                <title>Change Password</title>
            </Helmet>
            <Toaster toasterId={id} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: tokens.spacingVerticalL,
                maxWidth: "300px",
                width: "100%",
            }}>
                <Title1>Change Password</Title1>
                <Field validationState={oldPasswordState ? "success" : "error"} validationMessage={oldPasswordMessage}>
                    <Input placeholder="Old Password" type="password" onChange={(ev, data) => {
                        setOldPassword(data.value);
                    }} />
                </Field>
                <Field validationState={newPasswordState ? "success" : "error"} validationMessage={newPasswordMessage}>
                    <Input placeholder="New Password" type="password" onChange={handlePasswordChange} />
                </Field>
                <Field validationState={passwordMatch && confirmPasswordState ? "success" : "error"} validationMessage={confirmPasswordMessage}>
                    <Input placeholder="Confirm New Password" type="password" onChange={handleConfirmPasswordChange} />
                </Field>
                <Button appearance="primary" disabled={btnState} onClick={async () => {
                    await changePassword(props.username as string, oldPassword, newPassword).then((msg) => {
                        if (msg.success) {
                            dispatchToast(
                                <Toast>
                                    <ToastTitle>Password changed successfully!</ToastTitle>
                                </Toast>,
                                { intent: "success" }
                            );
                            props.setLogin(false);
                            props.setUsername(null);
                            props.setRoute("/login");
                        } else {
                            dispatchToast(
                                <Toast>
                                    <ToastTitle>Password change failed!</ToastTitle>
                                    <ToastBody>{msg.message}</ToastBody>
                                </Toast>,
                                { intent: "error" }
                            );
                        }
                    });
                }}>Save New Password</Button>
            </div>
        </div>
    )
}