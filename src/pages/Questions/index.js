import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateScore } from "../../actions";
import Grid from '@mui/material/Grid';
import { makeStyles, Button, Container } from "@material-ui/core";
import background from "../../img/background.jpg";
import { Card, Box, CardContent } from "@material-ui/core";


const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initTimer = 20;
  const [timer, setTimer] = useState(initTimer);
  const [seconds, setSeconds] =  useState(timer);
  const [index, setIndex] =  useState(0);
  const [correct, setCorrect] = useState();
  let questions = [{answer: ["5*2", "2*5"], options: ["5", "/", "4", "*", "2", "+"], question: ["How would you get the output to equal 10", "___=10"]},
  {answer: ["10/2"], options: ["10", "/", "2", "*", "5"], question: ["How would you get the output to equel 5.0", "___=5.0"]}];
  const [answer, setAnswer] =  useState("");
  const score = useSelector(state => state.score);
  const [questionString, setQuestionString] = useState(questions[0].question[1]);

  const callNextQuestion = (point) => {
    dispatch(updateScore(point));
    setTimer(initTimer);
    console.log(score + point)
    if (index+1 === questions.length) {
      navigate("/results");
    } else {
      setIndex(index + 1);
      setAnswer("")
      setQuestionString(questions[index+1].question[1]);
      setCorrect()
    }
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    }, 1000)
    return () => clearInterval(myInterval);
  });

  useEffect(() => {
    setSeconds(timer);
  }, [index]);

  useEffect(() => {
    if (seconds === 0) {
      callNextQuestion(0);
    };
  }, [seconds]);

  const handleAnswerSelect = async (option) => {
    let tmp = answer + option
    setAnswer(answer + option)
    setQuestionString(questionString.replace(/_/, option))
    console.log(tmp)
    console.log(questions[index].answer[0])
    if (questions[index].answer.includes(tmp)) {
      setCorrect("Correct!")
      setSeconds(99);
      await new Promise(res => setTimeout(res, 2000));
      callNextQuestion(1);
    } else if (!questionString.replace(/_/, option).includes('_')) {
      setCorrect("Incorrect, the answer is: " + questions[index].answer[0])
      setSeconds(99);
      await new Promise(res => setTimeout(res, 5000));
      callNextQuestion(0);
    }
  };


  //Include Material UI
  const useStyles = makeStyles ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
    },
    container: {
      backgroundColor: "white",
      height: "350px",
      width: "400px",
      padding: "20px",
      borderRadius: "10px",
      justify: "center",
      alignItems: "center",
      boxShadow: "10px 10px 20px black;",
      position: "relative"
    },
    container1: {
      backgroundColor: "white",
      height: "300px",
      width: "400px",
      padding: "20px",
      borderRadius: "10px",
      justify: "center",
      alignItems: "center",
      direction: "column",
      boxShadow: "10px 10px 20px black;",
      position: "relative"
    },
    container2: {
      backgroundColor: "white",
      height: "300px",
      width: "400px",
      padding: "20px",
      borderRadius: "20px",
      justify: "center",
      alignItems: "center",
      direction: "column",
      boxShadow: "10px 10px 20px black;"
    },
    cardStyle: {
      backgroundColor: "white",
      width: "400px",
      height: "75px",
      borderRadius: "10px",
      border: "1px solid black"
      // boxShadow: "10px 10px 20px black;"

    },
    box: {
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      // minHeight: "90vh",
      marginTop: "50px",
      // marginLeft: "500px",

    },
    cardStyle1: {
      backgroundColor: "white",
      width: "300px",
      height: "75px",
      borderRadius: "10px",
      position: "relative",
      border: "1px solid black"
    },
    box1: {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px"

    },
    writing: {
      color: "black",
      fontSize: "20px"
    },
    writing2: {
      color: "white",
      fontSize: "20px"
    },
    ans: {
      backgroundColor: "white",
      borderRadius: "5px",
      fontSize: "50px",
      marginTop: "50px",
      width: "70px"
    }

    })
  const classes = useStyles();


  return (
    <div className={classes.background}>
      
      <div className={classes.writing2}>
        {seconds} 
      </div> 

      <label className={classes.writing2}>Score: {score} </label>

      <div className='q-frame typewriter'>
      
      <Box className={classes.box}> 
      <Card className={classes.cardStyle}>
          <CardContent className={classes.writing}>
        {questions[index].question[0]}
      </CardContent>
      </Card>
      </Box>


       <Box className={classes.box1}> 
      <Card className={classes.cardStyle1}>
          <CardContent className={classes.writing}>
       {questionString} 
       </CardContent>
      </Card>
      </Box>

        <p>{correct}</p>
      </div>

      
        
      <Grid  container spacing={3}>
        {questions[index].options.map(opt => (
          <Grid item xs>
            <button className={classes.ans} disabled={answer.includes(opt)} onClick={() => handleAnswerSelect(opt)}>{opt}</button>
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
};

export default Quiz;
  