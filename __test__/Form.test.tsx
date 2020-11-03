import React from "react";
import Form from "../src/Form";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { change } from "redux-form";
import rootReducer from "../src/reducers";

describe("<Form /> renders without crashing", () => {
    it("Mounts", () => {
        const store = createStore(rootReducer);
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
    });
});

describe("<Form /> elements work properly", () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it("Submit button has Submit written on it", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const { getByText } = within(getByTestId("submit-button-form"));
        expect(getByText("Submit")).toBeInTheDocument();
    });

    it("Submit button enables by entering any value into form", () => {
        store.dispatch(change("user-info", "username", "johny"));
        const { getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );

        expect(getByTestId("submit-button-form")).not.toHaveAttribute("disabled");
    });

    it("Clear button enables by entering any value into form", () => {
        store.dispatch(change("user-info", "username", "johny"));
        const { getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );

        expect(getByTestId("submit-button-form")).not.toHaveAttribute("disabled");
    });
});
