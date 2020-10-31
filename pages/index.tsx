import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF",
    },
})(Typography);

export default function Home() {
    return (
        <Box display="flex" justifyContent="center">
            <WhiteTextTypography variant="h3" gutterBottom>
                Form example
            </WhiteTextTypography>
        </Box>
    );
}
