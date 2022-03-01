import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../contexts/SocketProvider";

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
    socket.emit('send_score', firstname, lastname, score);
  }, []);

  return (
    <div id="results-page">
      <h3>Score: {score}</h3>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}
export default Results;
  