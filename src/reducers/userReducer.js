const initState = { 
  username: "",
  firstname: "",
  lastname: "",
  socketId: "",
  isTeacher: false,
  score: 0,
  difficulty: "easy",
  category: "maths",
  isMulti: false
};

const userReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_USER':
      return {...state, username: action.payload.username, firstname: action.payload.firstname, lastname: action.payload.lastname, socketId: action.payload.socketId, isTeacher: action.payload.isTeacher};
    case 'LOAD_SETTINGS':
      return {...state, difficulty: action.payload.difficulty, category: action.payload.category}
    case 'UPDATE_SCORE':
      return {...state, score: action.payload.score}
    case 'IS_TEACHER':
      return {...state, isTeacher: true}
    case 'IS_MULTI':
      return {...state, isMulti: action.payload.bool}
    default:
      return state
  }
}

export default userReducer;