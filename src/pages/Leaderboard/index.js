import React, { useState, useEffect } from "react";
import { LeaderboardTable } from "../../components";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';
import { useSocket } from "../../contexts/SocketProvider";

function Leaderboard() {
  const navigate = useNavigate();
  const socket = useSocket();
  const [players, setPlayers] = useState([]);
  
  const handleClick = () => {
    navigate("/teacher");
  };

  useEffect(() => {
    socket.on('user_score', (data) => {
      setPlayers(players => [...players, data])
    });
  }, [socket]);
  
  const useStyles = makeStyles({
    mainStyle: {
    },
    cardStyle: {
      backgroundColor: "#140100"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh"
    },
    writing: {
      color: "white",
      fontSize: "20px"
    },
    button: {
      backgroundColor: "#140100",
      color: "#61DBFB",
      marginTop: "10px",
      fontSize: "20px",
    }
  });
  
  const classes = useStyles();

  return (
    <div id="Leaderboard-page" className={classes.mainStyle}>
      <Box className={classes.box}>
      <Card className={ classes.cardStyle }>
      <CardContent  className={classes.writing}>
      <h2>Leaderboard</h2>
      {players.map(player => (
        <p>{player.firstname} {player.lastname} {player.score}</p>
      ))}
      <button id="start-again" onClick={handleClick} className={classes.button}>
        Home
      </button>
      </CardContent>
      </Card>
      </Box>
    </div>
  );
}
export default Leaderboard;
  