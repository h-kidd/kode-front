import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeworkList, Title } from "../../components";

function Student() {
    const navigate = useNavigate()
    const joinGame = () => {
        navigate("/lobby")
    }

    const viewScores = () => {
        navigate("/viewScores")
    }

    return (
        <div>
            <Title />

            <HomeworkList />

            <div>
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