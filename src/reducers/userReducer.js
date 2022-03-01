const initState = { 
  username: "",
  firstname: "",
  lastname: "",
  socketId: "",
  isTeacher: false,
  score: 0,
  difficulty: "easy",
  topic: "maths",
  isMulti: false
};

const userReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_USER':
      return {...state, username: action.payload.username, firstname: action.payload.firstname, lastname: action.payload.lastname, socketId: action.payload.socketId, isTeacher: action.payload.isTeacher};
    case 'LOAD_SETTINGS':
      return {...state, difficulty: action.payload.difficulty, topic: action.payload.topic}
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