import { makeStyles, Card, Grid, Button } from "@material-ui/core";
import React from "react";
import { Title } from "../../components";
import background from '../../img/background.jpg';

const SetHomework = () => {

    const useStyles = makeStyles({
        background: {
            background: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh"
        },

        card: {
            width: "200px",
            margin: "10px"
        },

        button: {
            border: "1px solid black",
            marginBottom: "10px"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />

            <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid>
                <Card className={classes.card}>
                    <h3>Set Topic</h3>
                    <Button className={classes.button}>Maths</Button>
                    <br/>
                    <Button className={classes.button}>Variables</Button>
                    <br/>
                    <Button className={classes.button}>Functions</Button>
                </Card>
                </Grid>

                <Grid>
                <Card className={classes.card}>
                    <h3>Set Difficulty</h3>
                    <Button className={classes.button}>Easy</Button>
                    <br/>
                    <Button className={classes.button}>Medium</Button>
                    <br/>
                    <Button className={classes.button}>Hard</Button>
                </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default SetHomework;