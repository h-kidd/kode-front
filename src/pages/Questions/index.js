import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateScore } from "../../actions";
import Grid from '@mui/material/Grid';

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initTimer = 20;
  const [timer, setTimer] = useState(initTimer);
  const [seconds, setSeconds] =  useState(timer);
  const [index, setIndex] =  useState(0);
  const [correct, setCorrect] = useState();
  let questions = [{answer: ["5*2", "2*5"], options: ["5", "/", "4", "*", "2", "+"], question: ["How would you get the output to equel 10", "___=10"]},
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

  return (
    <div id="quiz-page">
      <div className='timer'>
        {seconds}
      </div>
      <label>Score: {score} </label>
      <div className='q-frame typewriter'>
        <p className=''> {questions[index].question[0]} </p>
        <p className=''> {questionString} </p>
        <p>{correct}</p>
      </div>
      <Grid container spacing={3}>
        {questions[index].options.map(opt => (
          <Grid item xs>
            <button disabled={answer.includes(opt)} onClick={() => handleAnswerSelect(opt)}>{opt}</button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Quiz;
  