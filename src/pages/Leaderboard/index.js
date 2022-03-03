import React, { useState, useEffect } from "react";
import { Nav } from "../../components";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button } from '@material-ui/core';
import { CardContent, Card, Box, Paper, Table, TableHead, TableRow, TableBody, TableContainer} from '@material-ui/core';
import { useSocket } from "../../contexts/SocketProvider";
import background from "../../img/background.jpg";
import { TableCell } from '@mui/material';


function Leaderboard() {
  const navigate = useNavigate();
  const socket = useSocket();
  const [players, setPlayers] = useState([]);
  
  const handleClick = () => {
    navigate("/teacher");
  };

  useEffect(() => {
    socket.on('user_score', (data) => {
      setPlayers(players => [...players, data].sort((a, b) => parseFloat(b.score) - parseFloat(a.score)))
    });
  }, [socket]);
  
  const useStyles = makeStyles({
    // mainStyle: {
      
    //     backgroundImage: `url(${background})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     objectFit: "cover",
    //     height: "100vh",
    // },
    cardStyle: {
      backgroundColor: "white",
      width: "500px",
      height: "500px",
      borderRadius: "10px",
      marginTop: "10px"
    },
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90vh",
      marginTop: "-50px"
      
    },
    writing: {
      color: "black",
      fontSize: "20px"
    },
    
    button: {
        backgroundColor: "lightblue",
        color: "black",
        borderRadius: "10px",
        borderColor: "lightblue",
        width: "100px",
        height: "40px",
        marginTop: "50px",
        '&:hover': {
          backgroundColor: '#006dbc',
          color: "white"
        }
    },
    nav: {
      fontWeight: "bold"
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
    },

    paper: {
      height: "375px",
      marginTop: "theme.spacing.unit * 3",
      overflowY: "auto"
  }
    
  });
  
  const classes = useStyles();

  return (
    <div id="Leaderboard-page" className={classes.mainStyle}>
      <Nav />
      <h1 className={classes.typography}>Leaderboard</h1>
      <Box className={classes.box}>
      <Card className={ classes.cardStyle }>
      <CardContent  className={classes.writing}>
      
      
      {/* <Paper>
      {players.map(player => */}
      <Paper className={classes.paper}>
      <TableContainer component={Paper}>
      <Table sx={{ midWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.nav} align="center" >Name</TableCell>
            <TableCell className={classes.nav} align="center">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
            key={player.name}
                sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
            {/* <TableCell component="th" scope="row">
              {player.name}
            </TableCell> */}
            <TableCell align="center">{player.firstname} {player.lastname}</TableCell>
            <TableCell align="center">{player.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Paper>
         
      
        {/* <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Score</TableCell>
          </TableRow>
        </TableHead>

      <TableCell>{player.firstname} {player.lastname} </TableCell>
      <TableCell> {player.score}</TableCell> */}

      {/* </Table>)} */}
      <Button id="start-again" onClick={handleClick} className={classes.button}>
        Home
      </Button>
      {/* </Paper> */}
      </CardContent>
      </Card>
      </Box>
    </div>
  )
  };
      
      
export default Leaderboard;
  