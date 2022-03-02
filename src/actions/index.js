import axios from "axios";

export const loadUser = (userId, username, firstname, lastname, socketId, isTeacher) => ({ 
  type: 'LOAD_USER',
  payload: {userId, username, firstname, lastname, socketId, isTeacher}
});

export const loadSettings = (topic, difficulty) => ({ 
  type: 'LOAD_SETTINGS',
  payload: { topic, difficulty }
});

export const isMulti = (bool) => ({ 
  type: 'IS_MULTI',
  payload: bool
});

export const updateScore = (score) => ({ 
  type: 'UPDATE_SCORE',
  payload: score
});

export const resetScore = () => ({ 
  type: 'RESET_SCORE',
  payload: {}
});

export const loadExercise = (topic, difficulty) => {
  return async (dispatch) => {
    try {
      const questions = await fetchQuestions(topic, difficulty);
      console.log(questions)
      dispatch({ type: 'LOAD_SETTINGS', payload: { topic, difficulty } });
      dispatch({ type: 'LOAD_QUESTIONS', payload: questions });
    } catch (err) {
      console.warn(err.message);
    };
  };
};

const fetchQuestions = async (topic, difficulty) => {        
  try {
      const { data } = await axios.get(`https://kode-server.herokuapp.com/questions`);
      return (data.filter(q => q.topic === topic && q.difficulty === difficulty));
  } catch(err) {
      throw new Error(err.message)
  }
};
