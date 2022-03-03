import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, CardActionArea, Card, Grid } from "@material-ui/core";
import school from "../../img/school.png";

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
            boxShadow: "10px 10px 20px black;",
            opacity: "20%"
            
        },
        cardStyle: {
            height: "375px",
            width: "375px",
            marginTop: "50px",
            backgroundImage: `url(${school})`,
            backgroundSize: "cover",
            backgroundColor: "white",
            border: "25px solid white",
            borderRadius: "15px"
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
        justify="center"
        alignItems="center"
        direction="column">
            <CardActionArea className={classes.cardStyle} onClick={ teacherLogin } to="/loginPage">
            <h1 className={classes.typography}>Teacher Login</h1>
            </CardActionArea>
        </Grid>
    )
}

export default TeacherLoginButton;