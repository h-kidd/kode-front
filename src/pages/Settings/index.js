import react from "react"
import { NavLink } from 'react-router-dom';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Categories from "../../data/Categories";
import { loadSettings } from '../../actions';

const CreateRoom = ({ user, fetchQuestions}) => {
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
      navigate("/Lobby");
    }
  };

  return (
      <div className="settings">
      <p className="p">Hi {user}</p>
        <span className="h2" style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          <TextField className="select"
            select
            label="Select Category"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField >
          <div className="divider1"/>
          <div className="difficulty">
          <TextField className="select"
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
          <div className="divider1"></div>

          <Button
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
    </div>
    
  );
};

export default CreateRoom;