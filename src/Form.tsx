import React from "react";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontWeight: 300,
        marginBottom: theme.spacing(3),
    },
}));

const validate = (values) => {
    const errors = { username: "", password: "", "first-name": "", "last-name": "" };
    if (!values.username) {
        errors.username = "Required";
    } else if (values.username.length > 15) {
        errors.username = "Must be 15 characters or less";
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]|.*\d)[\w!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{8,20}$/.test(
            values.password
        )
    ) {
        errors.password =
            "Must have 1 uppercase and 1 lowercase letters, 1 number or special character and should have at least 8 characters";
    } else if (values.password.length > 20) {
        errors.password = "Must be 20 charecters or less";
    }
    if (!values["first-name"]) {
        errors["first-name"] = "Required";
    } else if (values["first-name"].length > 25) {
        errors["first-name"] = "Must be 25 characters or less";
    }
    if (!values["last-name"]) {
        errors["last-name"] = "Required";
    } else if (values["last-name"].length > 25) {
        errors["last-name"] = "Must be 25 characters or less";
    }
    return errors;
};

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
    <TextField
        error={touched && invalid}
        helperText={touched && error}
        label={label}
        variant="outlined"
        inputProps={{
            autoComplete: "new-password",
            form: {
                autoComplete: "off",
            },
        }}
        {...input}
        {...custom}
    />
);

const Form = ({ handleSubmit, pristine, reset, submitting }) => {
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h3" className={classes.title}>
                Redux Form example
            </Typography>
            <Grid container spacing={4} justify="flex-end">
                <Grid item xs={6}>
                    <Field
                        id="username-input"
                        label="Username"
                        name="username"
                        fullWidth
                        component={renderTextField}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        id="password-input"
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        component={renderTextField}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        id="first-name-input"
                        label="First name"
                        name="first-name"
                        fullWidth
                        component={renderTextField}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        id="last-name-input"
                        label="Last name"
                        name="last-name"
                        fullWidth
                        component={renderTextField}
                    />
                </Grid>
                <Grid item>
                    <Button
                        disabled={pristine || submitting}
                        onClick={reset}
                        variant="contained"
                        size="medium"
                        color="secondary"
                    >
                        Clear
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        disabled={pristine || submitting}
                        type="submit"
                        variant="contained"
                        size="medium"
                        color="primary"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

const ReduxForm = reduxForm({
    // a unique name for the form
    form: "user-info",
    validate,
})(Form);

export default ReduxForm;
