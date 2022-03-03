import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../contexts/SocketProvider";
import { makeStyles, Button, Container, Grid, Card, Box, CardContent } from "@material-ui/core";
import background from "../../img/background.jpg";
import { isMulti, isResit, resetScore } from "../../actions"
import {  Nav } from "../../components";

function Results() {
  const navigate = useNavigate();
  const socket = useSocket();
  const dispatch = useDispatch();
  const room = useSelector(state => state.socketId);
  const firstname = useSelector(state => state.firstname);
  const lastname = useSelector(state => state.lastname);
  const score = useSelector(state => state.score);
  const isMultiplayer = useSelector(state => state.isMulti);
  const isResitScore = useSelector(state => state.isResit);
  const userId = useSelector(state => state.userId);
  const topic = useSelector(state => state.topic);
  const difficulty = useSelector(state => state.difficulty);
  
  const handleClick = () => {
    navigate("/student");
  };

  useEffect(() => {
    console.log(isMultiplayer)
    if (isMultiplayer) {
      console.log("hi")
      socket.emit('send_score', {room: room, firstname: firstname, lastname: lastname, score: score});
      dispatch(isMulti(false))
    } else {
      async function completeHomework() {
        const response = await fetch (`https://kode-server.herokuapp.com/exercises`,{
          method: 'GET',
          headers: { "Content-Type": "application/json"}});
        let data = await response.json();
        let exercise = data.find(e => e.topic === topic && e.difficulty === difficulty);
        if (!isResitScore) {
          const response2 = await fetch (`https://kode-server.herokuapp.com/students/${userId}/exercise/${exercise.id}/complete`,{
            method: 'PATCH',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') }});
          let data2 = await response2.json();
        }
        const response3 = await fetch (`https://kode-server.herokuapp.com/students/${userId}/exercise/${exercise.id}/score`,{
          method: 'PATCH',
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token')},
          body: JSON.stringify({score: score}) });
        let data3 = await response3.json();
        console.log(data3)
        dispatch(isResit(false))
      }
      completeHomework();
    }
  }, []);

  //Include Material UI
  const useStyles = makeStyles ({
    // background: {
    //     backgroundImage: `url(${background})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     objectFit: "cover",
    //     height: "100vh",
    //     marginTop: "0px"
    // },

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
      color: "black",
      marginTop: "10px",
      borderColor: "lightblue",
      width: "100px",
      height: "40px",
      borderRadius: "10px",
          '&:hover': {
            backgroundColor: '#006dbc',
            color: "white"
          }

    }
    
  })
    
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Nav />
       <Box className={classes.box}>
        <Card className={classes.cardStyle}>
          <CardContent className={classes.writing}> 
            <h3>Score: {score}</h3>
            <Button className={classes.button} onClick={handleClick}>Home</Button>
            </CardContent>
        </Card>
       </Box>
      
      
    </div>
  );
}
export default Results;
  