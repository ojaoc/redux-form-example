import React from "react";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        error={touched && invalid}
        helperText={touched && error}
        label={label}
        variant="outlined"
        {...input}
        {...custom}
    />
);

const Form = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs>
                <Field
                    id="username-input"
                    label="Username"
                    name="username"
                    fullWidth
                    component={renderTextField}
                />
            </Grid>
        </Grid>
    </form>
);

const ReduxForm = reduxForm({
    // a unique name for the form
    form: "user-info",
})(Form);

export default ReduxForm;
