import React from "react";
import { useNavigate } from "react-router-dom";

const StudentLoginButton = () => {
    const navigate = useNavigate()

    const studentLogin = () => {
        navigate("/studentLogin")
    }

    return (
        <div>
            <button id="student" onClick={ studentLogin }>
                Join Game
            </button>
        </div>
    )
}

export default StudentLoginButton;