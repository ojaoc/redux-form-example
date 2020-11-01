import React from "react";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";

const Form = ({ handleSubmit }) => (
    <Grid container spacing={2}>
        <form onSubmit={handleSubmit}></form>
    </Grid>
);

const ReduxForm = reduxForm({
    // a unique name for the form
    form: "user-info",
})(Form);

export default ReduxForm;
