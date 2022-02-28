import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentList, Title } from "../../components";
import background from "../../img/background.jpg";
import { makeStyles } from "@material-ui/core";

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
            marginTop: "20px"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
            
            <h2>Teacher Portal</h2>

            <StudentList />

            <div>
                <button id="createGame" onClick={ createGame }>
                    Create Game
                </button>
                <button id="setHomework" onClick={ setHomework }>
                    Set Homework
                </button>
            </div>
        </div>
    )
}

export default Teacher;