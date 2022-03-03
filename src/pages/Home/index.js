import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentLoginButton, Title } from "../../components";
import { makeStyles, Button } from "@material-ui/core";
import background from "../../img/background.jpg";

function Home() {
    const navigate = useNavigate()

    const teacher = () => {
        navigate("/teacherLogin");
    }

    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh"
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