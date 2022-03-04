import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {useHistory, NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {  makeStyles, Button } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import "./nav.css"

const preventDefault = (event) => event.preventDefault();

function Nav() {
  const navigate = useNavigate();
  const isTeacher = useSelector(state => state.isTeacher);

const handleClick = () => {
  if (isTeacher) {
    navigate("/teacher");
  } else {
    navigate("/student");
  }
};

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
}

// const Nav = () => {

  // Adding material ui
  const useStyles = makeStyles({
    container: {
        backgroundColor: "white",
        width: "400px",
        height: "400px",
        padding: "20px",
        borderRadius: "30px",
        marginRight: "100px",
        border: "1px solid black"

        },
    header: {
        backgroundColor: "lightGrey"
    },
    h3: {
        color: "black",
        paddingLeft: "20px"
    },
    arrow: {
        justifyContent: "left",
        marginBottom: "10px",
        color: "white",
        outline: "white",
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    home: {
        marginBottom: "10px",
        color: "white",
        marginLeft: "20px",
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    div: {
      justifyContent: "left",
      alignitems: "left",
      marginLeft: "0px"
    },
    box: {
      alignContent: "left",

    }
})

const classes = useStyles();

  return (
    <Box classname={classes.box}
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}>
    
    <div class="button-div">
      <div class="insidevbtn-div">
      <Button  onClick={() => navigate(-1)} className={classes.arrow}><ArrowBackIcon style={{ fill: 'rgb(58, 55, 167)', fontSize: "40px" }} /></Button>
      <Button onClick={handleClick} className={classes.home} color="inherit"><HomeIcon style={{ fill: 'rgb(58, 55, 167)', fontSize: "40px" }}/></Button>
      <Button onClick={handleLogout} className={classes.home} color="inherit"><LogoutIcon style={{ fill: 'rgb(58, 55, 167)', fontSize: "40px" }}/></Button>
      </div>
      
    </div>
 

    </Box>
     
  );
}

export default Nav;