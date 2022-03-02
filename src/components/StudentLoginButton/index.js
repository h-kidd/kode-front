import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, CardActionArea, Card, Grid } from "@material-ui/core";
import tag from "../../img/tag.png";

const StudentLoginButton = () => {
    const navigate = useNavigate()

    const studentLogin = () => {
        navigate("/loginPage")
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
            height: "350px",
            width: "300px",
            marginTop: "50px",
            backgroundImage: `url(${tag})`,
            backgroundSize: "cover",
        },

        typography: {
            fontFamily: [
                'Architects Daughter'
            ].join(','),
            allVariants: {
                color: "white"
            },
            fontSize: "35px",
            color: "white"
        }
    })

    const classes = useStyles();

    return (
        <Grid
        container
        justify="center"
        alignItems="center"
        direction="column">
            <CardActionArea className={classes.cardStyle} onClick={ studentLogin } to="/loginPage">
            <h1 className={classes.typography}>Student Login</h1>
            </CardActionArea>
        </Grid>
    )
}

export default StudentLoginButton;