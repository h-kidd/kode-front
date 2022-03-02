import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeworkList, Title } from "../../components";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";
import { dividerClasses } from "@mui/material";

function Student() {
    const navigate = useNavigate()
    const joinGame = () => {
        navigate("/lobby")
    }

    const viewScores = () => {
        navigate("/viewScores")
    }
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
            height: "40px",
            display: "inline-block"
        },
        container: {
            backgroundColor: "white",
            width: "400px",
            height: "400px",
            padding: "20px",
            borderRadius: "30px",
            position: "fixed",
            marginTop: "270px",
            marginLeft: "275px",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            display: "flex",
            
            },
            item1: {


            },
            item2: {
                border: "1px solid white"
                }   
    })
    const classes = useStyles();
    return (
        
        <div className={classes.background}>
            <Title />

        
        <Grid container justify="flex-start">

        <div className={classes.container}>
        <div  className={classes.item1}>
            <HomeworkList />
        
        </div>
        </div>
        </Grid>
    
        <Grid container justify="flex-end">          
            <Button variant="contained" className={classes.button} id="joinGame" onClick={ joinGame }>
                    Join Game
            </Button>      
            < br/>      
            <Button variant="contained" className={classes.button} id="viewScores" onClick={ viewScores }>
                    View Scores
            </Button>
            
            
        
    </Grid>
    </div>
    )
}

export default Student;