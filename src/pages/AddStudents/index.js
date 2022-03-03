import { makeStyles } from "@material-ui/core";
import React from "react";
import { Title } from "../../components";
import background from '../../img/background.jpg'

const AddStudents = () => {

    const useStyles = makeStyles({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
            Add Students
            <p>Username:</p><input type="text" placeholder="Enter name here"></input>
            <p>Password:</p><input type="text" placeholder="Enter name here"></input>
            <p>First Name:</p><input type="text" placeholder="Enter name here"></input>
            <p>Last Name:</p><input type="text" placeholder="Enter name here"></input>
        </div>
    )
}

export default AddStudents;