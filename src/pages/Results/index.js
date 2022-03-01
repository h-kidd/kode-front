import React, { useState, useEffect } from "react";
import { LeaderboardTable } from "../../components";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';
import { useSocket } from "../../contexts/SocketProvider";

function Leaderboard() {
  const navigate = useNavigate();
  const socket = useSocket();
  const score = useSelector(state => state.score);
  
  const handleClick = () => {
    navigate("/student");
  };

  useEffect(() => {
    socket.on('start_game', (firstname, lastname, score) => {
      setPlayers(players => [...players, {firstname: firstname, lastname: lastname, score: score}])
    });
  }, []);

  return (
    <div id="results-page">
      <h3>{score}</h3>
      <button onClick={handleClick()}>Home</button>
    </div>
  );
}
export default Leaderboard;
  