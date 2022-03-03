import React from "react";
import { useNavigate } from "react-router-dom";
import { StudentLoginButton, TeacherLoginButton, Title, Nav } from "../../components";
import { makeStyles, Button, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";
import './Home.css';

function Home() {
    const navigate = useNavigate()

    const teacher = () => {
        navigate("/teacherLogin");
    }

    //Include Material UI
    const useStyles = makeStyles ({
        // background: {
        //     backgroundImage: `url(${background})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     objectFit: "cover",
        //     // height: "100vh",
        //     backgroundColor: "#2d658a",
        //     marginBottom: "0"
        // },
        button: {
            paddingLeft: "50px"
        },
        
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Nav />
            <Title />

            <Grid container
            alignContent="center"
            justifyContent="center">
            <Grid>
            <StudentLoginButton />
            </Grid>
            <Grid className={classes.button}>
            <TeacherLoginButton />
            </Grid>
            </Grid>
        </div>
    )
}

export default Home;