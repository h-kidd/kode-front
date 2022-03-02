import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { StudentLoginButton, Title } from "../../components";
import { isTeacher } from "../../actions"
import { makeStyles, Button } from "@material-ui/core";
import background from "../../img/background.jpg";

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const teacher = () => {
        dispatch(isTeacher())
        navigate("/teacher");
    }

    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw"
            
        },
        button: {
            backgroundColor: "white",
            marginTop: "20px",
            border: "1px solid black"
        },
        
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />

            <StudentLoginButton />

            <Button variant="contained" className={classes.button} id="teacherLogin" onClick={teacher}>
                Teacher login
            </Button>
        </div>
    )
}

export default Home;