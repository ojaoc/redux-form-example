const validate = (values) => {
    const errors = { username: "", password: "", "first-name": "", "last-name": "" };

    if (!values.username) {
        errors.username = "Required";
    } else if (!values.username.trim()) {
        errors.username = "Required";
    } else if (values.username.length > 15) {
        errors.username = "Must be 15 characters or less";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]|.*\d)[\w!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{8,}$/.test(
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
    } else if (!values["first-name"].trim()) {
        errors["first-name"] = "Required";
    } else if (values["first-name"].length > 25) {
        errors["first-name"] = "Must be 25 characters or less";
    }

    if (!values["last-name"]) {
        errors["last-name"] = "Required";
    } else if (!values["last-name"].trim()) {
        errors["last-name"] = "Required";
    } else if (values["last-name"].length > 25) {
        errors["last-name"] = "Must be 25 characters or less";
    }
    return errors;
};

export default validate;
