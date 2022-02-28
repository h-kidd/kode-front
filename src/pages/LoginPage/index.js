import React from "react";
import { useNavigate } from "react-router-dom";


const StudentLogin = () => {

    const navigate = useNavigate()
    const login = () => {
        navigate('/student')
    }
    return (
        <div>
            <h1>Student Login!</h1>
            <p>Username:</p>
            <input type="text" placeholder="Enter username here!"/>
            <br/>
            <p>Password:</p>
            <input type="text" placeholder="Enter password here!" />
            <br/>
            <button id="student" onClick={ login }>
                Login!
            </button>
        </div>
    )
}

export default StudentLogin;