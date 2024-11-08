import { Button, Text, Title1, tokens } from "@fluentui/react-components";
import { MarkGithubIcon } from "@primer/octicons-react";
import { Helmet } from "react-helmet";

export default function Index(props: {
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
            userSelect: "none"
        }}>
            <Helmet>
                <title>Welcome to AlphaDeer</title>
            </Helmet>
            <Title1>Welcome to AlphaDeer</Title1>
            <Text>AlphaDeer website is still under construction. Submit an issue at</Text>
            <div style={{
                display: "flex",
                flexDirection: "row",
                columnGap: tokens.spacingHorizontalL
            }}>
                <Button appearance="primary" shape="circular" size="large" icon={<MarkGithubIcon />} onClick={() => { window.open("https://github.com/AlphaDeer-Dev") }}><Text font="monospace">AlphaDeer-Dev / web</Text></Button>
            </div>
        </div>
    )
}