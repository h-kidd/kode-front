import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadExercise } from "../../actions";

const HomeworkList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [homework, setHomework] = useState([]);
    const userId = useSelector(state => state.userId);

    useEffect(() => {
        async function getHomework() {
            const response = await fetch (`https://kode-server.herokuapp.com/students/${userId}/notcompletedexercises`,{
                method: 'GET',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') }});
            let data = await response.json();
            console.log(data)
            setHomework(data)
        }
        getHomework();
    },[])

    const handleHomeworkSelect = async (topic, difficulty) => {
        dispatch(loadExercise(topic, difficulty));
        await new Promise(res => setTimeout(res, 1000));
        navigate('/questions')
    };

    return (
        <div>
            <header>
                <h3>Homework</h3>
            </header>
            {homework.map(work => <div><span>{work.topic} {work.difficulty}</span> <button id={work.topic} onClick={() => handleHomeworkSelect(work.topic, work.difficulty)}>Start!</button></div>)}
        </div>
    )
}

export default HomeworkList;