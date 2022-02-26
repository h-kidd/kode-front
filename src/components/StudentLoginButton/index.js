import React from "react";
import { useNavigate } from "react-router-dom";

const StudentLoginButton = () => {
    const navigate = useNavigate()

    const joinGame = () => {
        navigate("/joinGame")
    }

    return (
        <div>
            <button id="joinGame" onClick={ joinGame }>
                Join Game
            </button>
        </div>
    )
}

export default StudentLoginButton;