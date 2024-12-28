import { Button, Text, Title1, Title2, tokens, Image } from "@fluentui/react-components";
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
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: tokens.spacingVerticalL,
                height: "100%",
                userSelect: "none"
            }}>
                <Helmet>
                    <title>Welcome to AlphaDeer</title>
                </Helmet>
                <Title1>Welcome to AlphaDeer</Title1>
                <br />
                <Title2>About us</Title2>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique sollicitudin ligula. Mauris quis pretium arcu, vitae elementum felis. Integer nulla felis, ullamcorper sed laoreet et, efficitur et tellus. Aliquam pharetra pulvinar vestibulum. Etiam augue justo, varius in cursus id, viverra a ipsum. Nullam eget nisi at elit tristique sodales. Quisque ac nulla lacus. Nam sagittis leo ultricies magna maximus, eu luctus massa gravida. Nam vel pellentesque odio. Proin sed facilisis erat. Mauris condimentum imperdiet ligula, et ultricies odio tempor id. Maecenas condimentum orci sit amet justo pretium, vitae ornare lectus aliquam. Aenean eleifend pharetra est, sit amet sollicitudin erat hendrerit nec. Suspendisse gravida nibh quam, nec iaculis lacus cursus in.</Text>
                <br />
                <Title2>Join us</Title2>
                <Text>Mauris leo felis, maximus accumsan condimentum a, rhoncus nec est. Maecenas semper massa ac purus elementum convallis. Nam eu commodo tellus. Mauris ut augue at tellus finibus ornare eu ornare nisl. Praesent a condimentum nunc. Vivamus interdum auctor mollis. In euismod semper tellus. Ut nisl risus, viverra sit amet porta eget, gravida at lacus. Praesent consequat blandit porttitor. Quisque dictum massa massa, ut pretium erat aliquam sed.</Text>
                <Text>In erat lacus, tincidunt ac metus porta, dictum venenatis nulla. Vestibulum ornare sapien quis placerat vestibulum. Aliquam ultricies, metus eget lacinia suscipit, ligula felis ullamcorper neque, at lacinia libero nulla ut nibh. Proin non elementum erat. Nunc sed quam vel nunc interdum eleifend. Nullam non eros mauris. Aliquam imperdiet, nulla nec blandit dapibus, est tellus volutpat lorem, vel porta diam purus sit amet sapien. Morbi gravida elit nec urna convallis volutpat. Vivamus hendrerit neque magna, id dictum nulla mattis nec. Morbi augue quam, sagittis id nibh sed, consectetur tincidunt magna. Mauris posuere metus massa, nec finibus nisi ullamcorper non. Vivamus iaculis ipsum id lorem auctor fringilla. Suspendisse fringilla risus sit amet libero hendrerit luctus. Nunc rutrum, magna vitae dignissim congue, felis est fermentum magna, ut venenatis lorem nisl nec justo.</Text>
                <br />
                <Text weight="bold" italic size={500} underline>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
            </div>
            <footer style={{
                position: "fixed",
                bottom: 0,
                marginBottom: "10px",
                display: "flex",
                flexDirection: "column",
                rowGap: tokens.spacingVerticalL,
                userSelect: "none"
            }}>
                <Title2>Follow us</Title2>
                <div style={{
                    display: "flex",
                    columnGap: tokens.spacingVerticalL
                }}>
                    <Image src="https://devtool.tech/api/placeholder/150/150" />
                    <Image src="https://devtool.tech/api/placeholder/150/150" />
                    <Image src="https://devtool.tech/api/placeholder/150/150" />
                </div>
            </footer>
        </>
    )
}