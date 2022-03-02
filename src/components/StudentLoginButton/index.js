import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, CardActionArea, CardContent, Card, Grid, CardMedia } from "@material-ui/core";
import tag from "../../img/tag.png";
import { sizeHeight } from "@mui/system";

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
            backgroundColor: "white",
            // backgroundImage: `url(${tag})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            // objectFit: "cover",
            // height: "100vh"
            // width: "100%",
            // margin: "auto",
            // paddingTop: "56.25%",
            // height: "300px",
            // width: "400px",
            // marginTop: "50px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px black;"
            
        },
        cardStyle: {
            backgroundColor: "white",
            backgroundImage: `url(${tag})`,
            backgroundSize: "cover",
            // objectFit: "cover",
            height: "100%",
            // maxHeight: "250",
            // width: "100%",
            // maxWidth: "250",
            // margin: "auto",
            // paddingTop: "56.25%",
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
                <CardActionArea className={classes.cardStyle} onClick={ studentLogin } to="/loginPage">
                <h1 className={classes.typography}>Student Login</h1>
                {/* <CardMedia className={classes.cardStyle} title="Tag Logo"/> */}
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default StudentLoginButton;