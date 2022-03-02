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
        navigate("/teacherLogin");
    }

    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh",
            display: "flex"
        },
        button: {
            backgroundColor: "white",
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "10px 10px 30px black;"
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