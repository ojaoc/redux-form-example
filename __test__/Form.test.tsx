import React from "react";
import Form from "../src/Form";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

const store = createStore(rootReducer);

describe("<Form /> renders without crashing", () => {
    it("Mounts", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
    });
});

describe("<Form /> elements work properly", () => {
    it("Submit button has Submit written on it", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        const { getByText } = within(getByTestId("submit-button-form"));
        expect(getByText("Submit")).toBeInTheDocument();
    });

    it("Submit button is disabled if form is empty", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );

        expect(getByTestId("submit-button-form")).toHaveAttribute("disabled");
    });
});
