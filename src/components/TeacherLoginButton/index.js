import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, CardActionArea, Card, Grid } from "@material-ui/core";
import hat from "../../img/hat3.png";
import "./teachloginbutton.css"

const TeacherLoginButton = () => {
    const navigate = useNavigate()

    const teacherLogin = () => {
        navigate("/teacherLogin")
    }

    const useStyles = makeStyles({
        card: {
            height: "350px",
            width: "300px",
            marginTop: "50px",
            border: "1px solid black",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px black",
            opacity: "20%"
            
        },
        cardStyle: {
            height: "375px",
            width: "375px",
            backgroundImage: `url(${hat})`,
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "5px solid white",
            boxShadow: "10px 10px 20px black",
            borderRadius: "15px",
            backgroundColor: "white"
        },

        typography: {
            fontFamily: [
                'Architects Daughter'
            ].join(','),
            allVariants: {
                color: "white"
            },
            fontSize: "25px",
            color: "#2d658a",
            display: "flex",
            position: "absolute",
            // margin: "0",
            justifyContent: "center",
            alignItems: "flex-end",
            bottom: "-40px",
            left: "85px"
            
            

        }
    })

    const classes = useStyles();

    return (
        <Grid
        container
        // justify="center"
        // alignItems="center"
        // direction="column">
        >
            <div class="student-div">
                <CardActionArea className={classes.cardStyle} onClick={ teacherLogin } to="/loginPage"> 
                </CardActionArea>
                <h1 class="student-login">Teacher Login</h1>

            </div>
            
        </Grid>
    )
}

export default TeacherLoginButton;