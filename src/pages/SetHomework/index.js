import react from "react"
import { NavLink } from 'react-router-dom';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Topics from "../../data/Topics";
import { loadSettings } from '../../actions';
import { makeStyles, Container } from "@material-ui/core";
import background from "../../img/background.jpg";
import { Title, Nav } from "../../components";

const SetHomework = () => {
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const userId = useSelector(state => state.userId);

    const navigate = useNavigate();

    const handleSubmit = () => {
    if (!topic || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      async function setHomework() {
            const response = await fetch (`https://kode-server.herokuapp.com/exercises`,{
                method: 'GET',
                headers: { "Content-Type": "application/json"}});
            let data = await response.json();
            let exercise = data.find(e => e.topic === topic && e.difficulty === difficulty);
            const response2 = await fetch (`https://kode-server.herokuapp.com/teachers/${userId}/class`,{
                method: 'GET',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') }});
            let classRoster = await response2.json();
            console.log(classRoster)
            for (var i = 0; i < classRoster.length; i++) {
                const response3 = await fetch (`https://kode-server.herokuapp.com/homework`,{
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify({student_id: classRoster[i].id, exercise_id: exercise.id})});
                let data3 = await response3.json();
            }
      }
      setHomework();
      navigate("/teacher");
    }
  };

  //Include Material UI
  const useStyles = makeStyles ({
    // background: {
    //     backgroundImage: `url(${background})`,
    //     backgroundSize: "cover",
    //     // backgroundPosition: "center",
    //     // objectFit: "cover",
    //     height: "100vh"
    // },
    container: {
      backgroundColor: "white",
      width: "350px",
      padding: "20px",
      borderRadius: "30px",
      // position: "fixed",
      marginTop: "50px",
      // marginLeft: "600px",
      // transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"   
  },
  button: {
    backgroundColor: "lightblue",
    color: "black",
    borderRadius: "10px",
    marginTop: "10px",
    borderColor: "lightblue",
    '&:hover': {
      backgroundColor: '#006dbc',
      color: "white"
    }
  },
  input: {
    width: "200px"
  },
  hi: {
    textAlign: "center",
    fontSize: "50px",
    color: "white",
    margin: 0
  },
  typography: {
    fontFamily: [
        'Architects Daughter'
    ].join(','),
    allVariants: {
        color: "white",
        

    },
    outline: "white",
    color: "white"
  }
  })
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <Nav />
      <h1 className={classes.typography}>Set Homework</h1>
      <Container className={classes.container} maxWidth="sm">
        <span className="h2" style={{ fontSize: 30 }}>Homework Settings</span>
        < br />
        <div className="settings__select">
          <TextField className={classes.input}
            select
            label="Select Category"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Topics.map((top) => (
              <MenuItem key={top.topic} value={top.value}>
                {top.topic}
              </MenuItem>
            ))}
          </TextField >
          {/* <div className="divider1"/> */}
          <div className="difficulty">
          <TextField className={classes.input} 
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="1">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="2">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="3">
              Hard
            </MenuItem>
          </TextField>
          </div>
          {/* <div className="divider1"></div> */}

          <Button className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Set Homework
          </Button>
        </div>
      {/* <img src="/quiz.svg" className="banner" alt="quiz app" /> */}
      <Outlet />
      </Container>
    </div>
    
  );
};

export default SetHomework;