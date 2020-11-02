import React from "react";
import Form from "../src/Form";
import { render } from "@testing-library/react";
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


