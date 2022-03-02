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
            color: "black",
            borderRadius: "10px",
            marginTop: "50px",
            width: "200px",
            height: "40px",
            border: "1px solid black"
            
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
            
            <h1>Teacher Portal</h1>

            <Grid container
            direction="row"
            justify="center"
            alignItems="center">

            <StudentList />

                <Grid>
                <Button variant="contained"  id="createGame" className={classes.button} onClick={ createGame }>
                    Create Game
                </Button>
                < br/>
                <Button variant="contained" id="setHomework" className={classes.button} onClick={ setHomework }>
                    Set Homework
                </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Teacher;