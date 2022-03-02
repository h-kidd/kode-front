import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../contexts/SocketProvider";
import { makeStyles, Button, Container, Grid, Card, Box, CardContent } from "@material-ui/core";
import background from "../../img/background.jpg";

function Results() {
  const navigate = useNavigate();
  const socket = useSocket();
  const firstname = useSelector(state => state.firstname);
  const lastname = useSelector(state => state.lastname);
  const score = useSelector(state => state.score);
  
  const handleClick = () => {
    navigate("/student");
  };

  useEffect(() => {
    socket.emit('send_score', {firstname: firstname, lastname: lastname, score: score});
  }, []);

  //Include Material UI
  const useStyles = makeStyles ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
        marginTop: "0px"
    },

    cardStyle: {
      backgroundColor: "white",
      width: "200px",
      borderRadius: "10px",
      boxShadow: "10px 10px 20px black;"


    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh",

    },
    writing: {
      color: "black",
      fontSize: "20px"
    },
    button: {
      backgroundColor: "lightblue",
      color: "white",
      borderRadius: "10px",
      marginTop: "10px",
      borderColor: "lightblue",
      width: "100px",
      height: "40px"
    }
    
  })
    
  const classes = useStyles();

  return (
    <div className={classes.background}>
       <Box className={classes.box}>
        <Card className={classes.cardStyle}>
          <CardContent className={classes.writing}> 
            <h3>Score: {score}</h3>
            <button className={classes.button} onClick={handleClick}>Home</button>
            </CardContent>
        </Card>
       </Box>
      
      
    </div>
  );
}
export default Results;
  