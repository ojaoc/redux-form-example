import React from "react";
import StoreDisplay from "../src/StoreDisplay";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

const store = createStore(rootReducer);
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

describe("<StoreDisplay /> renders without crashing", () => {
    it("Mounts", () => {
        render(
            <Provider store={store}>
                <StoreDisplay />
            </Provider>
        );
    });
});

describe("<StoreDisplay /> renders text correctly", () => {
    const mockData = "Sample Data";

    beforeEach(() => {
        useSelector.mockImplementation(() => mockData);
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    it("Renders string", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <StoreDisplay />
            </Provider>
        );
        const { getByText } = within(getByTestId("pre-display-text"));
        expect(getByText('"Sample Data"')).toBeInTheDocument();
        // Needs to be like this because of <pre> and JSON.stringify(), which puts
        // "" around the string
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
