import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components";
import background from '../../img/background.jpg'

const AddStudents = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const userId = useSelector(state => state.userId);

    async function addStudent() {
        if (username && password && firstname && lastname) {
            const response = await fetch (`https://kode-server.herokuapp.com/students`,{
                method: 'POST',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') },
                body: JSON.stringify({username: username, password: password, firstname: firstname, lastname: lastname, teacher_id: userId})});
            let data = await response.json();
            navigate("/teacher");
        }
    }

    const useStyles = makeStyles({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh"
        },

        
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
            <h1>Add Student</h1>
            <p>Username:</p><input type="text" placeholder="Enter username here" onChange={(e) => setUsername(e.target.value)}></input>
            <p>Password:</p><input type="text" placeholder="Enter password here" onChange={(e) => setPassword(e.target.value)}></input>
            <p>First Name:</p><input type="text" placeholder="Enter first name here" onChange={(e) => setFirstname(e.target.value)}></input>
            <p>Last Name:</p><input type="text" placeholder="Enter last name here" onChange={(e) => setLastname(e.target.value)}></input>
            <button onClick={addStudent}>Submit</button>
        </div>
    )
}

export default AddStudents;