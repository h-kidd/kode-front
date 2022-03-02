import React, { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { HomeworkList, Title } from "../../components";
import { makeStyles, Button, Container, Grid, Card } from "@material-ui/core";
import background from "../../img/background.jpg";
import { dividerClasses } from "@mui/material";
import { isMulti, resetScore } from '../../actions';

function Student() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const joinGame = () => {
        navigate("/waiting")
    }

    const viewScores = () => {
        navigate("/score")
    }

    useEffect(() => {
        dispatch(isMulti(false));
        dispatch(resetScore())
    }, []);
    
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh",
        },
        button: {
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            marginTop: "50px",
            width: "200px",
            height: "40px",
            border: "1px solid black"
            // display: "inline-block"
        },
        container: {
            backgroundColor: "white",
            width: "400px",
            height: "400px",
            padding: "20px",
            borderRadius: "30px",
            marginRight: "100px",
            border: "1px solid black"
            // position: "fixed",
            // marginTop: "270px",
            // marginLeft: "275px",
            // transform: "translate(-50%, -50%)",
            // flexDirection: "column",
            // alignItems: "left",
            // display: "flex",
            
            },
            card: {
                
                verticalAlign: "center",
                // marginLeft: "50px",
                backgroundColor: "clear"
                // flexDirection: "column",
                // display: "flex",
                // position: "absolute"
                // minHeight: "100vh",
                // minWidth: "100px"

            },
            item2: {
                border: "1px solid white"
                }   
    })
    const classes = useStyles();
    return (
        
        <div className={classes.background}>
            <Title />

            <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid>

                <Card className={classes.container}>
                <div  className={classes.item1}>
                <HomeworkList />
        
                </div>
                </Card>
                </Grid>

                
                <Grid>
                         
                <Button variant="contained" className={classes.button} id="joinGame" onClick={ joinGame }>
                    Join Game
                </Button>      
                < br/>      
                <Button variant="contained" className={classes.button} id="viewScores" onClick={ viewScores }>
                    View Scores
                </Button>
                
                </Grid>
                
            </Grid>
            
        </div>
    )
}

export default Student;