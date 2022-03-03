import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title, Nav } from "../../components";
import background from '../../img/background.jpg'
import { CardContent, Card, Box, Paper, Table, TableHead, TableRow, TableBody, TableContainer, Button} from '@material-ui/core';

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
            height: "100vh",
        },
        cardStyle: {
            backgroundColor: "white",
            width: "500px",
            height: "450px",
            borderRadius: "10px",
        },
        box: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",     
    },
        form:{
            margin: "10px",
            padding: "5px"
        },
        input:{
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box",
            border: "2px solid black",
            bordeRadius: "4px"
        
        },
        button: {
            backgroundColor: "white",
            marginTop: "20px",
            borderRadius: "10px",
            width: ""
            
        },
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>          
             <Nav />
            <Title />
            <Box className={classes.box}>
            <Card className={ classes.cardStyle }>
            <CardContent  className={classes.writing}>
            {/* <h2>Details</h2>

            Add Student
            <p>Username:</p><input type="text" placeholder="Enter username here" onChange={(e) => setUsername(e.target.value)}></input>
            <p>Password:</p><input type="text" placeholder="Enter password here" onChange={(e) => setPassword(e.target.value)}></input>
            <p>First Name:</p><input type="text" placeholder="Enter first name here" onChange={(e) => setFirstname(e.target.value)}></input>
            <p>Last Name:</p><input type="text" placeholder="Enter last name here" onChange={(e) => setLastname(e.target.value)}></input> */}
            <form>
                <div className={classes.form}>
                <label for="fname">First Name</label>
                <input className={classes.input} type="text" id="fname" name="fname" placeholder="Enter first name here" onChange={(e) => setFirstname(e.target.value)}></input>
                </div>
                <div className={classes.form}>
                <label for="lname">Last Name</label>
                <input className={classes.input} type="text" id="fname" name="fname" placeholder="Enter last name here" onChange={(e) => setLastname(e.target.value)}></input>
                </div>
                <div className={classes.form}>
                <label for="fname">Username</label>
                <input className={classes.input} type="text" id="fname" name="fname" placeholder="Enter password here" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className={classes.form}>
                <label for="fname">Password</label>
                <input className={classes.input} type="text" id="fname" name="fname"  placeholder="Enter username here" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
            </form>

            

            </CardContent>
            </Card>
            </Box>
            <Button className={classes.button} onClick={addStudent}>Submit</Button>
        </div>
    )
}

export default AddStudents;