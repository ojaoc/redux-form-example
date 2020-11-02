import React from "react";
import StoreDisplay from "../src/StoreDisplay";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

describe("StoreDisplay renders without crashing", () => {
    it("Renders", () => {
        const store = createStore(rootReducer);
        const div = document.createElement("div");

        render(
            <Provider store={store}>
                <StoreDisplay />
            </Provider>,
            {
                container: document.body.appendChild(div),
            }
        );
    });
});
