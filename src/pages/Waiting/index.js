import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Title } from "../../components";
import { useSocket } from "../../contexts/SocketProvider";
import { loadExercise, isMulti } from '../../actions';
import { makeStyles, Card, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";

function Waiting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const socket = useSocket();
    const room = useSelector(state => state.socketId);
    const firstname = useSelector(state => state.firstname);
    const lastname = useSelector(state => state.lastname);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        socket.emit('join', {room: room, firstname: firstname, lastname: lastname});
      }, []);

    useEffect(() => {
        socket.on('init_game', async (data) => {
            dispatch(loadExercise(data.topic, data.difficulty));
            dispatch(isMulti(true));
            await delay(1000);
            navigate('/questions')
        });
      }, [socket]);

      // Adding material ui
      const useStyles = makeStyles({
        mainStyle: {
          background: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh"
        },
        cardCode: {
          width: "50%",
          marginTop: "20px",
          border: "1px solid black"
        },
        cardLobby: {
          width: "50%",
          marginTop: "20px",
          border: "1px solid black"
        },
        button: {
            backgroundColor: "white",
            marginTop: "50px",
            border: "1px solid black"
        }
      });
    
      const classes = useStyles();

    return (
        <div className={classes.mainStyle}>
          <Title />

          <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          id="Lobby" >
          <Card className={classes.cardCode}>
            Code: code
          </Card>
          <Card className={classes.cardLobby}>
            <h3>Waiting for teacher to start</h3>
          </Card>
        </Grid>
        </div>
    )
}

export default Waiting;