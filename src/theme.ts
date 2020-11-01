import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#825CC4",
        },
        secondary: {
            main: "#AFA8BA",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#AFA8BA",
        },
    },
});

export default theme;
