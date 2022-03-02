const initState = { 
  username: "",
  firstname: "first",
  lastname: "last",
  socketId: "test",
  isTeacher: false,
  score: 0,
  topic: "",
  difficulty: "",
  questions: [],
  isMulti: false
};

const userReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_USER':
      return {...state, username: action.payload.username, firstname: action.payload.firstname, lastname: action.payload.lastname, socketId: action.payload.socketId, isTeacher: action.payload.isTeacher};
    case 'LOAD_SETTINGS':
      return {...state, difficulty: action.payload.difficulty, topic: action.payload.topic}
    case 'LOAD_QUESTIONS':
      return {...state, difficulty: action.payload.questions}
    case 'RESET_SCORE':
      return {...state, score: 0}
    case 'UPDATE_SCORE':
      return {...state, score: state.score + action.payload}
    case 'IS_TEACHER':
      return {...state, isTeacher: action.payload}
    case 'IS_MULTI':
      return {...state, isMulti: action.payload}
    default:
      return state
  }
}

export default userReducer;