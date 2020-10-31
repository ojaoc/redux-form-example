import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;
