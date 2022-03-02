import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeworkList, Title } from "../../components";
import { makeStyles, Button, Container } from "@material-ui/core";
import background from "../../img/background.jpg";

function Student() {
    const navigate = useNavigate()
    const joinGame = () => {
        navigate("/waiting")
    }

    const viewScores = () => {
        navigate("/viewScores")
    }
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh",
        },
    })
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Title />

            <HomeworkList />

            <div >
                <button id="joinGame" onClick={ joinGame }>
                    Join Game
                </button>
                <button id="viewScores" onClick={ viewScores }>
                    View Scores
                </button>
            </div>
        </div>
    )
}

export default Student;