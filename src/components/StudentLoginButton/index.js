import React from "react";
import { useNavigate } from "react-router-dom";

const StudentLoginButton = () => {
    const navigate = useNavigate()

    const student = () => {
        navigate("/student")
    }

    return (
        <div>
            <button id="student" onClick={ student }>
                Join Game
            </button>
        </div>
    )
}

export default StudentLoginButton;