import React from "react";
import StoreDisplay from "../src/StoreDisplay";
import { getDefaultNormalizer, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { change } from "redux-form";
import rootReducer from "../src/reducers";

const store = createStore(rootReducer);

describe("<StoreDisplay /> renders text correctly", () => {
    it("Renders string", () => {
        const mockData = {
            username: "Teste123",
            password: "Teste123",
            "first-name": "Teste123",
            "last-name": "Teste123",
        };

        Object.keys(mockData).forEach((field) =>
            store.dispatch(change("user-info", field, mockData[field]))
        );

        const { getByTestId } = render(
            <Provider store={store}>
                <StoreDisplay />
            </Provider>
        );

        const text = getByTestId("pre-display-text").textContent.replace(/\s/g, "");
        expect(text).toBe(JSON.stringify(mockData).replace(/\s/g, ""));
    });
});

describe("<StoreDisplay /> contains a <pre> inside a <h5>", () => {
    it("Contains", () => {
        const { container } = render(
            <Provider store={store}>
                <StoreDisplay />
            </Provider>
        );

        const h5 = container.querySelector("h5");
        const pre = h5.firstChild;

        expect(h5).toBeInTheDocument();
        expect(pre).toBeInTheDocument();
    });
});
