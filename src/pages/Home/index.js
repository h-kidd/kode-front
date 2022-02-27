import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { StudentLoginButton, Title } from "../../components";
import { isTeacher } from "../../actions"

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const teacher = () => {
        dispatch(isTeacher())
        navigate("/teacher");
    }

    return (
        <div>
            <Title />

            <StudentLoginButton />

            <button id="teacherLogin" onClick={teacher}>
                Teacher login
            </button>
        </div>
    )
}

export default Home;