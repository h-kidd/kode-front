import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const joinGame = () => {
        navigate("/joinGame");
    }

    const createGame = () => {
        navigate("/createGame");
    }
    
    return (
        <div>
            <header>
                <h1>Kode</h1>
            </header>

            <button id="studentLogin" onClick={joinGame}>
                Student login
            </button>

            <button id="teacherLogin" onClick={createGame}>
                Teacher login
            </button>
        </div>
    )
}

export default Home;