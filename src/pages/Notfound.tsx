import { Title1, Text, Link, tokens } from "@fluentui/react-components";
import { Helmet } from "react-helmet";

export default function (props: {
    route: string;
    setRoute: Function
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
                <title>404 Not Found</title>
            </Helmet>
            <Title1>404 Not Found</Title1>
            <Text>Cannot find target page {props.route}</Text>
            <Link onClick={() => { props.setRoute("/") }}>Return to landing page →</Link>
        </div>
    )
}