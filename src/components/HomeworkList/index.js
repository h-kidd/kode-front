import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadExercise } from "../../actions";
import { makeStyles, Table, TableHead, TableHeader, TableCell, TableRow, TableBody, Paper, TableContainer, Button } from '@material-ui/core';
import { CardContent, Card, Box } from '@material-ui/core';

const HomeworkList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [homework, setHomework] = useState([]);
    const userId = useSelector(state => state.userId);

    useEffect(() => {
        async function getHomework() {
            const response = await fetch (`https://kode-server.herokuapp.com/students/${userId}/notcompletedexercises`,{
                method: 'GET',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') }});
            let data = await response.json();
            console.log(data)
            setHomework(data)
        }
        getHomework();
    },[])

    const handleHomeworkSelect = async (topic, difficulty) => {
        dispatch(loadExercise(topic, difficulty));
        await new Promise(res => setTimeout(res, 1000));
        navigate('/questions')
    };

     // Adding Material UI
     const useStyles = makeStyles({      
        box: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "90vh",
          // boxShadow: "10px 10px 20px black;",
          paddingTop: "20px"
  
        },
        writing: {
          color: "black",
          fontSize: "20px"
        },
        cardStyle: {
          backgroundColor: "white",
          width: "500px",
          height: "500px",
          borderRadius: "10px"
        },
        button: {
          backgroundColor: "lightblue",
          borderColor: "lightblue",
          borderRadius: "5px"
        },
        nav: {
          fontWeight: "bold",
          textAlign: "center",
          border: "1px solid",
          width: "100%"
        },
        
       
      });
    
      const classes = useStyles();
    return (
        // <div>
        //     <header>
        //         <h3>Homework</h3>
        //     </header>
        //     {homework.map(work => <div><span>{work.topic} {work.difficulty}</span> <button id={work.topic} onClick={() => handleHomeworkSelect(work.topic, work.difficulty)}>Start!</button></div>)}
        // </div>
        <div>
            <Box className={classes.box}>
        <Card className={ classes.cardStyle }>
            <h2>Homework</h2>
        <TableContainer component={Paper}>
            <Table sx={{ midWidth: 250 }} aria-label="simple table">  
                         
        <TableBody>
            {homework.map((work) => (
            <TableRow
            key={work.name}
            sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {work.name}
                </TableCell>
                <TableCell align="center">{work.topic}</TableCell>
                <TableCell align="center">{work.difficulty}</TableCell>
                <TableCell align="center"><Button className={classes.button} id={work.topic} onClick={() => handleHomeworkSelect(work.topic, work.difficulty)}>Start</Button></TableCell>

            </TableRow>
        ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
    </div>
    );
};

export default HomeworkList;