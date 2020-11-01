import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/reducers";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { composeWithDevTools } from "redux-devtools-extension";
import theme from "../src/theme";
import Head from "next/head";

const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Redux Form | ojaoc</title>
            </Head>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    );
}

export default MyApp;
