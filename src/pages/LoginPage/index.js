import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";
import { appendOwnerState } from "@mui/base";


const LoginPage = () => {

    const navigate = useNavigate()
    const login = () => {
        navigate('/student')
    }

    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh",
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
            width: "300px",
            padding: "20px",
            borderRadius: "30px",
            // position: "fixed",
            // marginTop: "200px",
            justify: "center",
            // marginLeft: "600px",
            // transform: "translate(-50%, -50%)",
            // display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            direction: "column" 
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
            
        },
        placeholder: {
            position: "absolute",
            left: "12px",
            bottom: "50%",
            top: "22px",
            transform: "translateY(-50%)",
            width: "calc(100% - 24px)" , 
            color: "#aaa",
            overflow: "hidden",
            whitespace: "nowrap",
            textoverflow: "ellipsis"
        }
        })
    
        const classes = useStyles();
    return (
        <Grid className={classes.background}>

        <Container className={classes.container} maxWidth="sm">
            <div>      
            <h1>Student Login!</h1>
            <label className={classes.customfield}>
            <input className={classes.customfieldinput} type="text" placeholder ="Username"/>
            </label>
            <br/>
            <label className={classes.customfield}>
            <input className={classes.customfieldinput} type="text" placeholder="Password" />
            </label> 
            <br/>
            
            <button className={classes.button} id="student" 
            variant="contained"
            color="primary"
            size="large"
            onClick={ login }>
                Login!
            </button>
            </div> 
                
        </Container>

        </Grid>
    )
}

export default LoginPage;