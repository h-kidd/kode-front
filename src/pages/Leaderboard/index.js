import React, { useState, useEffect } from "react";
import { LeaderboardTable, Nav } from "../../components";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';
import { useSocket } from "../../contexts/SocketProvider";
import background from "../../img/background.jpg";


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
      
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
    },
    cardStyle: {
      backgroundColor: "white",
      width: "500px",
      height: "500px",
      borderRadius: "10px"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh"
    },
    writing: {
      color: "black",
      fontSize: "20px"
    },
    
    button: {
        backgroundColor: "lightblue",
        color: "white",
        borderRadius: "10px",
        borderColor: "lightblue",
        width: "100px",
        height: "40px",
        marginTop: "350px"
    }
  });
  
  const classes = useStyles();

  return (
    <div id="Leaderboard-page" className={classes.mainStyle}>
      <Nav />
      <Box className={classes.box}>
      <Card className={ classes.cardStyle }>
      <CardContent  className={classes.writing}>
      <h2>Leaderboard</h2>
      {players.map(player => (
        <p>{player.firstname} {player.lastname} {player.score}</p>
      ))}
      <Button id="start-again" onClick={handleClick} className={classes.button}>
        Home
      </Button>
      </CardContent>
      </Card>
      </Box>
    </div>
  );
}
export default Leaderboard;
  