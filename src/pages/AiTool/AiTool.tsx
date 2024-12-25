import { tokens } from "@fluentui/react-components"
import { Helmet } from "react-helmet"

export default function AiTool(props: {}) {
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
                <title>AI Tool</title>
            </Helmet>
            Reserved for AI Tool content
        </div>
    )
}