import { Button, SlotRenderFunction, Theme, webDarkTheme, webLightTheme, Text } from "@fluentui/react-components";
import { ChevronLeftFilled, ChevronRightFilled, PersonFilled, WeatherMoonFilled, WeatherSunnyFilled } from "@fluentui/react-icons";
import { ButtonHTMLAttributes, DetailedHTMLProps, DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, RefObject } from "react";
import { isServerOnline } from "../utils/api";

function SideNav(props: {
    children: string | number | boolean | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | (string & ReactPortal) | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (string & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (number & ReactPortal) | (number & ReactElement<any, string | JSXElementConstructor<any>>) | (number & Iterable<ReactNode>) | (number & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (false & ReactPortal) | (false & ReactElement<any, string | JSXElementConstructor<any>>) | (false & Iterable<ReactNode>) | (false & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (true & ReactPortal) | (true & ReactElement<any, string | JSXElementConstructor<any>>) | (true & Iterable<ReactNode>) | (true & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (ReactPortal & string) | (ReactPortal & number) | (ReactPortal & false) | (ReactPortal & true) | (ReactPortal & ReactElement<any, string | JSXElementConstructor<any>>) | (ReactPortal & Iterable<ReactNode>) | (ReactPortal & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (ReactElement<any, string | JSXElementConstructor<any>> & number) | (ReactElement<any, string | JSXElementConstructor<any>> & false) | (ReactElement<any, string | JSXElementConstructor<any>> & true) | (ReactElement<any, string | JSXElementConstructor<any>> & ReactPortal) | (ReactElement<any, string | JSXElementConstructor<any>> & Iterable<ReactNode>) | (ReactElement<any, string | JSXElementConstructor<any>> & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (Iterable<ReactNode> & string) | (Iterable<ReactNode> & number) | (Iterable<ReactNode> & false) | (Iterable<ReactNode> & true) | (Iterable<ReactNode> & ReactPortal) | (Iterable<ReactNode> & ReactElement<any, string | JSXElementConstructor<any>>) | (Iterable<ReactNode> & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | null | undefined
    onClick?: any
}) {
    return (
        <Button appearance="subtle" size="large" shape="square" style={{ width: "100%" }} onClick={props.onClick || (() => { })}> {props.children}</Button >
    )
}

function TopNav(props: {
    children: string | number | boolean | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | (string & ReactPortal) | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (string & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (number & ReactPortal) | (number & ReactElement<any, string | JSXElementConstructor<any>>) | (number & Iterable<ReactNode>) | (number & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (false & ReactPortal) | (false & ReactElement<any, string | JSXElementConstructor<any>>) | (false & Iterable<ReactNode>) | (false & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (true & ReactPortal) | (true & ReactElement<any, string | JSXElementConstructor<any>>) | (true & Iterable<ReactNode>) | (true & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (ReactPortal & string) | (ReactPortal & number) | (ReactPortal & false) | (ReactPortal & true) | (ReactPortal & ReactElement<any, string | JSXElementConstructor<any>>) | (ReactPortal & Iterable<ReactNode>) | (ReactPortal & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (ReactElement<any, string | JSXElementConstructor<any>> & number) | (ReactElement<any, string | JSXElementConstructor<any>> & false) | (ReactElement<any, string | JSXElementConstructor<any>> & true) | (ReactElement<any, string | JSXElementConstructor<any>> & ReactPortal) | (ReactElement<any, string | JSXElementConstructor<any>> & Iterable<ReactNode>) | (ReactElement<any, string | JSXElementConstructor<any>> & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | (Iterable<ReactNode> & string) | (Iterable<ReactNode> & number) | (Iterable<ReactNode> & false) | (Iterable<ReactNode> & true) | (Iterable<ReactNode> & ReactPortal) | (Iterable<ReactNode> & ReactElement<any, string | JSXElementConstructor<any>>) | (Iterable<ReactNode> & SlotRenderFunction<Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLButtonElement> | null | undefined; }>) | null | undefined
    onClick?: any
}) {
    return (
        <Button appearance="subtle" size="large" shape="square" onClick={props.onClick || (() => { })}>{props.children}</Button>
    )
}

let server: string;
await isServerOnline().then((res) => { server = res.message });

export default function (props: {
    setRoute: Function;
    theme: Theme;
    setTheme: Function;
    login: boolean;
    setLogin: Function;
    username: string | null;
    setUsername: Function;
    expand: boolean;
    setExpand: Function;
}) {
    const toggleExpand = () => {
        props.setExpand(!props.expand)
    }
    return (
        <>
            <div style={{
                position: "fixed",
                top: 0,
                left: props.expand ? 250 : 0,
                width: props.expand ? "calc(100% - 250px)" : "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "left 200ms ease, width 200ms ease",
                backgroundColor: "#88888833"
            }}>
                <div style={{
                    flex: 1,
                    textAlign: "left",
                }}>
                    <Button appearance="subtle" size="large" shape="square" onClick={toggleExpand} icon={props.expand ? <ChevronLeftFilled /> : <ChevronRightFilled />} />
                    <TopNav onClick={() => { props.setRoute("/") }}>AlphaDeer</TopNav>
                </div>

                {/* <div style={{
                    flex: 1,
                    textAlign: "center"
                }}>
                    <div style={{
                        userSelect: "none"
                    }}><Text>{server}</Text></div>
                </div> */}

                <div style={{
                    flex: 1,
                    textAlign: "right",
                }}>
                    <Button appearance="subtle" size="large" shape="square" icon={props.theme === webLightTheme ? <WeatherSunnyFilled /> : <WeatherMoonFilled />} onClick={() => {
                        props.setTheme(props.theme === webLightTheme ? webDarkTheme : webLightTheme)
                    }} />
                    <Button appearance="subtle" size="large" shape="square" icon={<PersonFilled />} onClick={() => { props.setRoute(props.login ? "/account" : "/login") }}>{props.login ? props.username : "Click to login"}</Button>
                </div>
            </div>
            <div style={{
                position: "fixed",
                top: 0,
                left: props.expand ? 0 : -250,
                transition: "left 200ms ease",
                width: "250px",
                height: "100%",
                backgroundColor: "#88888833"
            }}>
                <SideNav onClick={() => { props.setRoute("/") }}>Home</SideNav>
                <SideNav onClick={() => { props.setRoute(props.login ? "/account" : "/login") }}>Account</SideNav>
                <SideNav onClick={() => { props.setRoute("/aiLearn") }}>AI Learning</SideNav>
                <SideNav onClick={() => { props.setRoute("/aiTool") }}>AI Tool</SideNav>
                <SideNav onClick={() => { props.setRoute("/aiResearch") }}>AI Research</SideNav>
                <SideNav onClick={() => { props.setRoute("/aiWelfare") }}>AI Welfare</SideNav>
                <SideNav onClick={() => { props.setRoute("/aiJournal") }}>AI Journal</SideNav>
            </div>
        </>
    )
}