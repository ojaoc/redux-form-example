import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Form from "../components/Form";

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(9),
        textAlign: "center",
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Grid container spacing={4}>
                    <Grid item xs={7}>
                        <Paper elevation={3} className={classes.paper}>
                            <Form />
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper elevation={3} className={classes.paper}>
                            hello?
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
