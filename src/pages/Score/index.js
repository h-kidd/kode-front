import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { makeStyles, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import background from "../../img/background.jpg";
import { Title } from "../../components";
import { loadExercise, isResit } from "../../actions";

const Score = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState([]);
  const userId = useSelector(state => state.userId);

  useEffect(() => {
    async function getCompleted() {
      const response = await fetch (`https://kode-server.herokuapp.com/students/${userId}/completedexercises`,{
        method: 'GET',
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') }});
      let data = await response.json();
      setCompleted(data)
    }
    getCompleted();
  },[])

  const handleHomeworkSelect = async (topic, difficulty) => {
    dispatch(loadExercise(topic, difficulty));
    dispatch(isResit(true));
    await new Promise(res => setTimeout(res, 1000));
    navigate('/questions')
  };

    // Adding Material UI
    const useStyles = makeStyles({

      background: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
      
      },
      cardStyle: {
        backgroundColor: "#140100"
      },
      box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        // boxShadow: "10px 10px 20px black;"

      },
      writing: {
        color: "white",
        fontSize: "20px"
      }
    });
  
    const classes = useStyles();
  
    return (
      <div className={classes.background}>
        <Title />
        <Table sx={{minWidth: 600}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell className={classes.writing} align="center">Name</TableCell>
            <TableCell className={classes.writing} align="center">Score</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {completed.map(work => <div><span>{work.topic} {work.difficulty}: {work.score}</span> <button id={work.topic} onClick={() => handleHomeworkSelect(work.topic, work.difficulty)}>Start!</button></div>)}
          </TableBody>
        </Table>
      </div>
    );
};
  
export default Score;
  