import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";
import { appendOwnerState } from "@mui/base";
import { Title } from "../../components";
import {  Card, Box, CardContent } from "@material-ui/core";


const TeacherLogin = () => {

    const navigate = useNavigate()
    const login = () => {
        navigate('/settings')
    }

    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // objectFit: "cover",
            height: "100vh"
        },
        button: {
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
            borderColor: "lightblue",
            width: "100px",
            height: "40px"
            
        },
        container: {
            backgroundColor: "white",
            height: "300px",
            width: "400px",
            padding: "20px",
            borderRadius: "20px",
            // position: "fixed",
            // marginTop: "250px",
            justify: "center",
            // marginLeft: "600px",
            // transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // direction: "column",
            marginTop: "100px",
            direction: "column",
            boxShadow: "10px 10px 20px black;"


        },
        customfield: {
            fontSize: "14px",
            position: "relative",
            bordertop: "20px solid transparent"

        },
        customfieldinput: {
            border: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "#f2f2f2",
            padding: "12px",
            borderradius: "3px",
            margin: "10px"
            
        }
        })
    
        const classes = useStyles();
    return (
       
        <div className={classes.background}>
        <Box className={classes.box}>
         <Card className={classes.cardStyle}>
           <CardContent className={classes.writing}> 
           <h1>Teacher Login!</h1>
                <label>
                  <input className={classes.customfieldinput} type="text" placeholder ="Username"/>
                  </label>
                  <br/>
             <label>
             <input className={classes.customfieldinput} type="text" placeholder="Password" />
             </label> 
             <br/>
             <button className={classes.button} id="student" onClick={ login }>
                 Login!
             </button>
             </CardContent>
         </Card>
        </Box>
        </div>
    )
}

export default TeacherLogin;