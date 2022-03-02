import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, CardActionArea, CardContent, Card, Grid } from "@material-ui/core";
import boy_girl from "../../img/boy_girl.png";
import { sizeHeight } from "@mui/system";

const StudentLoginButton = () => {
    const navigate = useNavigate()

    const studentLogin = () => {
        navigate("/loginPage")
    }

    const useStyles = makeStyles({
        card: {
            height: "300px",
            width: "400px",
            marginTop: "50px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px black;"
            
        },
        cardStyle: {
            backgroundColor: "white",
            backgroundImage: `url(${boy_girl})`,
            backgroundSize: "cover",
            paddingTop: "56.25%",
        },
        typography: {
            fontFamily: [
                'Architects Daughter'
            ].join(','),
            allVariants: {
                color: "white"
            },
            fontSize: "35px"
        }
    })

    const classes = useStyles();

    return (
        <Grid
        container
        justify="center"
        alignItems="center"
        direction="column">
            <Card className={classes.card}>
                <CardActionArea onClick={ studentLogin } to="/loginPage">
                    <h2 className={classes.typography}>Student Login</h2>
                    <CardContent className={classes.cardStyle}>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default StudentLoginButton;