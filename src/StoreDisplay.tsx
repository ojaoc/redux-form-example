import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const StoreDisplay = ({ formData }) => {
    return (
        <Typography variant="h5">
            <pre data-testid="pre-display-text">{JSON.stringify(formData, null, 4)}</pre>
        </Typography>
    );
};

const mapStateToProps = (state) => {
    const { form } = state;

    return {
        formData: form["user-info"].values,
    };
};

export default connect(mapStateToProps)(StoreDisplay);
