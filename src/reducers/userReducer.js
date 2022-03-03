const initState = {
  userId: 0,
  username: "",
  firstname: "first",
  lastname: "last",
  socketId: "test",
  isTeacher: false,
  score: 0,
  topic: "",
  difficulty: "",
  questions: [{answer:["-1","2"],"options":["0","-1","3","2"],"question":["Fill in the blank to get the last item (cherry) in this list: fruits = [\"apple\", \"banana\", \"cherry\"]","fruits[_]"]},
  {"answer":["List"],"options":["Array","List","Dictionary","Set"],"question":["What data type is this piece of code: random = [\"1\", \"Volvo\", 2.4]","_"]},
  {"answer":["float"],"options":["str (string)","float","int (integer)","bool (boolean)"],"question":["Fill in the blank with the correct data type","2.9 is a _"]},
  {"answer":["10>=5"],"options":["10!=5","5<=10","10>5","5>=10","10>=5","10=5"],"question":["How would you code 10 is greater than or equal to 5","_"]},
  {"answer":["14%6"],"options":["14","//","2","/","6","%"],"question":["Fill in the blanks to get the output to equal 2","___=2"]}],
  isMulti: false,
  isResit: false,
  studentId: 0,
  studentFname: "first",
  studentLname: "last"
};

const userReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_USER':
      return {...state, userId: action.payload.userId, username: action.payload.username, firstname: action.payload.firstname, lastname: action.payload.lastname, socketId: action.payload.socketId, isTeacher: action.payload.isTeacher};
    case 'LOAD_SETTINGS':
      return {...state, difficulty: action.payload.difficulty, topic: action.payload.topic}
    case 'LOAD_QUESTIONS':
      return {...state, questions: action.payload}
    case 'RESET_SCORE':
      return {...state, score: 0}
    case 'UPDATE_SCORE':
      return {...state, score: state.score + action.payload}
    case 'IS_MULTI':
      return {...state, isMulti: action.payload}
    case 'IS_RESIT':
      return {...state, isResit: action.payload}
    case 'LOAD_STUDENT':
      return {...state, studentId: action.payload.studentId, studentFname: action.payload.studentFname, studentLname: action.payload.studentLname}
    default:
      return state
  }
}

export default userReducer;