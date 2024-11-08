import { Button, Title1, tokens } from "@fluentui/react-components";
import { Helmet } from "react-helmet";

export default function (props: {
    setRoute: Function;
    login: boolean;
    setLogin: Function;
    username: string | null;
    setUsername: Function;
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            rowGap: tokens.spacingVerticalL,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}>
            <Helmet>
                <title>{props.username}</title>
            </Helmet>
            <Title1>Welcome back, {props.username}</Title1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                columnGap: tokens.spacingHorizontalL,
            }}>
                <Button appearance="subtle" onClick={() => {
                    props.setLogin(false);
                    props.setUsername(null);
                    props.setRoute("/login");
                }}>Logout {props.username}</Button>
                <Button appearance="subtle" onClick={() => {
                    props.setRoute("/changePassword");
                }}>Change Password</Button>
            </div>
        </div>
    )
}