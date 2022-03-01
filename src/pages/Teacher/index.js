import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentList, Title } from "../../components";
import background from "../../img/background.jpg";
import { Button, makeStyles, Grid } from "@material-ui/core";

function Teacher() {
    const navigate = useNavigate()
    const createGame = () => {
        navigate("/Settings")
    }

    const setHomework = () => {
        navigate("/setHomework")
    }

    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh"
        },
        button: {
            backgroundColor: "white",
            marginRight: "20px"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
            
            <h1>Teacher Portal</h1>

            <StudentList />

            <Grid container justify="flex-end">
                <Button variant="contained"  id="createGame" className={classes.button} onClick={ createGame }>
                    Create Game
                </Button>
                <Button variant="contained" id="setHomework" className={classes.button} onClick={ setHomework }>
                    Set Homework
                </Button>
            </Grid>
        </div>
    )
}

export default Teacher;