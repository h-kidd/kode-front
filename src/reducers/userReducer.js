const initState = { 
  username: "",
  firstname: "",
  lastname: "",
  socketId: "",
  isTeacher: false,
  score: 0,
};

const userReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_USER':
      return {...state, username: action.payload.username, firstname: action.payload.firstname, lastname: action.payload.lastname, socketId: action.payload.socketId, isTeacher: action.payload.isTeacher};
    case 'UPDATE_SCORE':
      return {...state, score: action.payload.score}
    default:
      return state
  }
}

export default userReducer;