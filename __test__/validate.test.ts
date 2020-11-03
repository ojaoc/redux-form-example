import validate from "../src/utils/validate";

describe("validate function works properly", () => {
    const returnModel = {
        username: "",
        password: "",
        "first-name": "",
        "last-name": "",
    };

    it("Returns no errors with correct input", () => {
        const validateCall = validate({
            username: "johny123",
            password: "Teste123",
            "first-name": "João",
            "last-name": "Afonso",
        });
        expect(validateCall).toEqual(returnModel);
    });

    it("Detects if username is empty", () => {
        const noUsernameCall = validate({
            username: "",
            password: "Teste123",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const noUserError = { ...returnModel, username: "Required" };
        expect(noUsernameCall).toEqual(noUserError);
    });

    it("Detects if username is over 15 characters", () => {
        const tooLongUsernameCall = validate({
            username: "Johny67891011213", // 16 char
            password: "Teste123",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const tooLongUserError = { ...returnModel, username: "Must be 15 characters or less" };
        expect(tooLongUsernameCall).toEqual(tooLongUserError);
    });

    it("Detects if password is empty", () => {
        const noPassCall = validate({
            username: "johny123",
            password: "",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const noUserError = { ...returnModel, password: "Required" };
        expect(noPassCall).toEqual(noUserError);
    });

    it("Detects if password is invalid - No UpperCase", () => {
        const noUpperPassPassCall = validate({
            username: "johny123",
            password: "teste123!",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const noUpperPassPassError = {
            ...returnModel,
            password:
                "Must have 1 uppercase and 1 lowercase letters, 1 number or special character and should have at least 8 characters",
        };
        expect(noUpperPassPassCall).toEqual(noUpperPassPassError);
    });

    it("Detects if password is invalid - No LowerCase", () => {
        const noLowerPassPassCall = validate({
            username: "johny123",
            password: "TESTE123!",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const noLowerPassPassError = {
            ...returnModel,
            password:
                "Must have 1 uppercase and 1 lowercase letters, 1 number or special character and should have at least 8 characters",
        };
        expect(noLowerPassPassCall).toEqual(noLowerPassPassError);
    });

    it("Detects if password is invalid - No Number or special character", () => {
        const noNumberOrSpecialCharPassPassCall = validate({
            username: "johny123",
            password: "TesteAbCd",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const noNumberOrSpecialCharPassPassError = {
            ...returnModel,
            password:
                "Must have 1 uppercase and 1 lowercase letters, 1 number or special character and should have at least 8 characters",
        };
        expect(noNumberOrSpecialCharPassPassCall).toEqual(noNumberOrSpecialCharPassPassError);
    });

    it("Detects if password is invalid - Too short", () => {
        const tooShortPassPassCall = validate({
            username: "johny123",
            password: "Te123!s",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const tooShortPassPassError = {
            ...returnModel,
            password:
                "Must have 1 uppercase and 1 lowercase letters, 1 number or special character and should have at least 8 characters",
        };
        expect(tooShortPassPassCall).toEqual(tooShortPassPassError);
    });

    it("Detects if password is invalid - Too long", () => {
        const tooLongPassPassCall = validate({
            username: "johny123",
            password: "Teste123!!12345qwerty",
            "first-name": "João",
            "last-name": "Afonso",
        });
        const tooLongPassPassError = {
            ...returnModel,
            password: "Must be 20 charecters or less",
        };
        expect(tooLongPassPassCall).toEqual(tooLongPassPassError);
    });

    it("Detects if first name is empty", () => {
        const noFirstNameCall = validate({
            username: "johny123",
            password: "Teste123",
            "first-name": "",
            "last-name": "Afonso",
        });
        const noFirstNameError = { ...returnModel, "first-name": "Required" };
        expect(noFirstNameCall).toEqual(noFirstNameError);
    });

    it("Detects if first name is too long", () => {
        const tooLongFirstNameCall = validate({
            username: "johny123",
            password: "Teste123",
            "first-name": "António Constantino da Silva Pereira",
            "last-name": "Afonso",
        });
        const tooLongFirstNameError = {
            ...returnModel,
            "first-name": "Must be 25 characters or less",
        };
        expect(tooLongFirstNameCall).toEqual(tooLongFirstNameError);
    });

    it("Detects if last name is empty", () => {
        const noLastNameCall = validate({
            username: "johny123",
            password: "Teste123",
            "first-name": "João",
            "last-name": "",
        });
        const noLastNameError = { ...returnModel, "last-name": "Required" };
        expect(noLastNameCall).toEqual(noLastNameError);
    });

    it("Detects if last name is too long", () => {
        const tooLongLastNameCall = validate({
            username: "johny123",
            password: "Teste123",
            "first-name": "Afonso",
            "last-name": "António Constantino da Silva Pereira",
        });
        const tooLongLastNameError = {
            ...returnModel,
            "last-name": "Must be 25 characters or less",
        };
        expect(tooLongLastNameCall).toEqual(tooLongLastNameError);
    });
});
