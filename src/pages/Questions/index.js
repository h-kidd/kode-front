import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateScore } from "../../actions";

const Quiz = () => {
  const dispatch = useDispatch();
  const initTimer = 10;
  const [timer, setTimer] = useState(initTimer);
  const [seconds, setSeconds] =  useState(timer);
  const [index, setIndex] =  useState(0);
  const score = useSelector(state => state.score);

  const callNextQuestion = (point) => {
    dispatch(updateScore(point));
    setTimer(initTimer);
    console.log(score + point)
    setIndex(index + 1)
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
      handleZero();
    };
  }, [seconds]);

  const handleZero = () => {
    //callNextQuestion(0);
    callNextQuestion(1);
  }

  return (
    <div role="quiz-container" id="quiz-page">
      <div className='timer'>
        {seconds}
      </div>
      <label>  Score: {score} </label>
    </div>
  );
};

export default Quiz;
  