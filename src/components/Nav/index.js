import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {useHistory, NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  makeStyles } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const preventDefault = (event) => event.preventDefault();

function Nav() {
  const navigate = useNavigate();

const handleClick = () => {
  navigate("/");
};

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
    }
})

const classes = useStyles();

  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}>
    <div className={classes.div}>
    <Button onClick={handleClick} className={classes.arrow}><ArrowBackIcon style={{ fill: 'white', fontSize: "40px" }} /></Button>
    <Button className={classes.home} href="" color="inherit"><HomeIcon style={{ fill: 'white', fontSize: "40px" }}/></Button>
    <Button className={classes.home} href="" color="inherit"><LogoutIcon style={{ fill: 'white', fontSize: "40px" }}/></Button>
    </div>
    </Box>
     
  );
}

export default Nav;