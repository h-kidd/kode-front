import Categories from "../../data/Categories";
import React from 'react'
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const SetHomework = ({ user, fetchQuestions}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
    if (!category || !difficulty || !date) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty, date);
      navigate("/quiz");
    }
  };

return(
    <div class="container" display="flex">
    <div>Set Topic</div>
    <div className="category">
          <TextField className="select"
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
          </div>
    <div>Topic Difficulty</div>  
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
    <div>Date Due By</div>

    {/* <label for="start">Due Date:</label>

    <input type="date" id="start" name="trip-start"
       value="2022-02-28"
       min="2022-01-01" max="2022-12-31"></input> */}
    <div className="duedate">
        <form onSubmit={handleSubmit}>
        <label for="duedate">Due Date:</label> 
            <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)>
            
        <input type="submit" value="Submit" />
        </form>
            
            
    </div>
            
    <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Set Homework
          </Button>
    <Outlet />
  </div>

)}

export default SetHomework;