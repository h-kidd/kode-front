import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LobbyStatus, PlayerBubble, Nav } from "../../components";
import { useSelector } from "react-redux";
import { useSocket } from "../../contexts/SocketProvider";
import { Grid, makeStyles } from '@material-ui/core';
import { CardContent, Card, Box, Button } from '@material-ui/core';
import background from "../../img/background.jpg";
import { Title } from "../../components";

const Lobby = () => {
    const socket = useSocket();
    const navigate = useNavigate();
    const room = useSelector(state => state.socketId);
    const topic = useSelector(state => state.topic);
    const difficulty = useSelector(state => state.difficulty);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      socket.emit('create', room);
    }, []);

    useEffect(() => {
      socket.on('user_joined', (data) => {
        setPlayers(players => [...players, data])
      });
    }, [socket]);

    const handleStart = (() => {
      socket.emit('start_game', {room: room, topic: topic, difficulty: difficulty});
      navigate("/leaderboard")
    })

    // const startGame = () => {
    //   navigate('/questions')
    // }
    
    const useStyles = makeStyles({
        mainStyle: {
          background: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh"
        },
        cardCode: {
          width: "50%",
          marginTop: "20px",
          border: "1px solid black"
        },
        cardLobby: {
          width: "50%",
          marginTop: "20px",
          border: "1px solid black"
        },
        button: {
          backgroundColor: "white",
          marginTop: "20px",
          borderRadius: "10px",
      },
      });
    
      const classes = useStyles();
    return (
        <div className={classes.mainStyle}>
          <Nav />
          <Title />

          <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          id="Lobby" >
          <Card className={classes.cardLobby}>
            <h3>Classroom List</h3>
            {players.map(player => (
              <p>{player.firstname} {player.lastname}</p>
            ))}
          </Card>
          <br/>
          <Button className={classes.button} variant="contained" onClick={handleStart}>
          Start Game
          </Button>
        </Grid>
        </div>
      );
    };
    
export default Lobby;