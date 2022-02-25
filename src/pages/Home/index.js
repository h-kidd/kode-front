import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentLoginButton, Title } from "../../components";

function Home() {
    const navigate = useNavigate()

    const createGame = () => {
        navigate("/createGame");
    }

    return (
        <div>
            <Title />

            <StudentLoginButton />

            <button id="teacherLogin" onClick={createGame}>
                Teacher login
            </button>
        </div>
    )
}

export default Home;