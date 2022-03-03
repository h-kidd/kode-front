import react from "react"
import { NavLink } from 'react-router-dom';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Topics from "../../data/Topics";
import { loadSettings } from '../../actions';
import { makeStyles, Container } from "@material-ui/core";
import background from "../../img/background.jpg";
import { Nav } from "../../components";


const CreateRoom = () => {
    const dispatch = useDispatch();
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
    if (!topic || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      dispatch(loadSettings(topic, difficulty))
      navigate("/lobby");
    }
  };

  //Include Material UI
  const useStyles = makeStyles ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // objectFit: "cover",
        height: "100vh"
    },
    container: {
      backgroundColor: "white",
      width: "350px",
      padding: "20px",
      borderRadius: "30px",
      // position: "fixed",
      marginTop: "100px",
      // marginLeft: "600px",
      // transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"   
  },
  button: {
    backgroundColor: "lightblue",
    color: "white",
    borderRadius: "10px",
    marginTop: "10px",
    borderColor: "lightblue",
  },
  input: {
    width: "200px"
  },
  hi: {
    textAlign: "center",
    fontSize: "50px",
    color: "white",
    margin: 0
  }
  })
  const classes = useStyles();


  return (
    <div className={classes.background}>
      <Nav />
      <p className={classes.hi}>Start a Game</p>
      <Container className={classes.container} maxWidth="sm">
        <span className="h2" style={{ fontSize: 30 }}>Quiz Settings</span>
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
            Start Quiz
          </Button>
        </div>
      {/* <img src="/quiz.svg" className="banner" alt="quiz app" /> */}
      <Outlet />
      </Container>
    </div>
    
  );
};

export default CreateRoom;