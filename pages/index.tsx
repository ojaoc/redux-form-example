import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Form from "../src/Form";
import StoreDisplay from "../src/StoreDisplay";
import { useSelector } from "react-redux";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) => ({
    paperForm: {
        padding: theme.spacing(4),
        textAlign: "center",
        minWidth: 350,
    },
    paperDisplay: {
        padding: theme.spacing(6),
        minWidth: 350,
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto"
    },
}));

export default function Home() {
    const classes = useStyles();
    const isSubmit = useSelector(
        (state) => state.form["user-info"] && state.form["user-info"].submitSucceeded
    );
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop="20vh"
                padding="2vw"
            >
                <Grid container spacing={4} className={classes.container}>
                    <Grid item xs={12} xl={7}>
                        <Paper elevation={4} className={classes.paperForm}>
                            <Form onSubmit={console.log} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} xl={5}>
                        <Fade in={isSubmit}>
                            <Paper elevation={4} className={classes.paperDisplay}>
                                <StoreDisplay />
                            </Paper>
                        </Fade>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
