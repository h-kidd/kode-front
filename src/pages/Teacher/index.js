import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentList, Title } from "../../components";

function Teacher() {
    const navigate = useNavigate()
    const createGame = () => {
        navigate("/gameSettings")
    }

    const setHomework = () => {
        navigate("/setHomework")
    }

    return (
        <div>
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