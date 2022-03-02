import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LobbyStatus, PlayerBubble } from "../../components";
import { useSelector } from "react-redux";
import { useSocket } from "../../contexts/SocketProvider";
import { Grid, makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';
import background from "../../img/background.jpg";
import { Title } from "../../components";

const Lobby = () => {
    const socket = useSocket();
    const navigate = useNavigate();
    const room = useSelector((state) => state.socketId);
    const category = useSelector((state) => state.category);
    const difficulty = useSelector((state) => state.difficulty);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
      socket.emit('create', room);
    }, []);

    useEffect(() => {
      socket.on('user_joined', (firstname, lastname) => {
        setPlayers(players => [...players, {firstname: firstname, lastname: lastname}])
      });
    }, [socket]);

    const handleStart = (() => {
      socket.emit('start_game', category, difficulty);
      navigate("/leaderboard")
    })
    
    const useStyles = makeStyles({
        mainStyle: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
        marginTop: "0px"
        },
        cardCode: {
          width: "50%",
          marginTop: "20px",
          border: "1px solid black",
          borderradius: "10px"
        },
        cardLobby: {
          width: "50%",
          marginTop: "20px",
          border: "1px solid black",
          borderradius: "10px"

        }
      });
    
      const classes = useStyles();
    return (
        <div className={classes.mainStyle}>
          <Title />

          <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          id="Lobby" >
          <Card className={classes.cardCode}>
            Code: code
          </Card>
          <Card className={classes.cardLobby}>
            <h3>Classroom List</h3>
            <p>Users</p>
          </Card>
        </Grid>
        </div>
      );
    };
    
export default Lobby;
    