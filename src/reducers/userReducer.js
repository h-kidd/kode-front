const initState = { 
  username: "",
  firstname: "",
  lastname: "",
  isTeacher: false,
  socketId: "",
  questions: [],
  score: 0,
  isMultiplayer: false
};

const userReducer = (state=initState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default userReducer;