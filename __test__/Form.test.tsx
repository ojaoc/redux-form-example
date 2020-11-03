import React from "react";
import Form from "../src/Form";
import { fireEvent, render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { change } from "redux-form";
import rootReducer from "../src/reducers";

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
        const { rerender, getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        expect(getByTestId("submit-button-form")).toHaveAttribute("disabled");

        store.dispatch(change("user-info", "username", "johny"));
        rerender(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        expect(getByTestId("submit-button-form")).not.toHaveAttribute("disabled");
    });

    it("Clear button enables by entering any value into form", () => {
        const { rerender, getByTestId } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        expect(getByTestId("clear-button-form")).toHaveAttribute("disabled");

        store.dispatch(change("user-info", "username", "johny"));
        rerender(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        expect(getByTestId("clear-button-form")).not.toHaveAttribute("disabled");
    });

    it("Should not run validations onClickOut -> TextFields TYPE TEXT if they are empty", () => {
        const { container } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        container.querySelectorAll("input[type='text']").forEach((input) => {
            fireEvent.focus(input);
            fireEvent.blur(input);
            expect(input).toHaveAttribute("aria-invalid", "false");
        });
    });

    it("Should not run validations onClickOut -> TextFields TYPE PASSWORD if they are empty", () => {
        const { container } = render(
            <Provider store={store}>
                <Form />
            </Provider>
        );
        container.querySelectorAll("input[type='password']").forEach((input) => {
            fireEvent.focus(input);
            fireEvent.blur(input);
            expect(input).toHaveAttribute("aria-invalid", "false");
        });
    });
});
