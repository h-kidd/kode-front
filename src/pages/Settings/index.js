import react from "react"
import { NavLink } from 'react-router-dom';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Categories from "../../data/Categories";
import { loadSettings } from '../../actions';
import { makeStyles, Container } from "@material-ui/core";
import background from "../../img/background.jpg";


const CreateRoom = ({ user, fetchQuestions}) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      dispatch(loadSettings(category, difficulty))
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
      <p className={classes.hi}>Hi {user}</p>
      <Container className={classes.container} maxWidth="sm">
        <span className="h2" style={{ fontSize: 30 }}>Quiz Settings</span>
        < br />
        <div className="settings__select">
          <TextField className={classes.input}
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
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
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
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