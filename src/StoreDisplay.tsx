import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const StoreDisplay = () => {
    const formData = useSelector(
        (state) => state.form["user-info"] && state.form["user-info"].values
    );
    return (
        <Typography variant="h5">
            <pre data-testid="pre-display-text">{JSON.stringify(formData, null, 4)}</pre>
        </Typography>
    );
};

export default StoreDisplay;
