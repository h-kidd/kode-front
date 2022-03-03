import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles, Card, Table, TableCell, TableRow, TableBody, TableContainer, Paper, Box } from "@material-ui/core";
import background from '../../img/background.jpg';
import { Title, Nav } from "../../components";
import { TableHead } from "@mui/material";

const Details = () => {
    const userId = useSelector(state => state.userId);
    const studentId = useSelector(state => state.studentId);
    const studentFname = useSelector(state => state.studentFname);
    const studentLname = useSelector(state => state.studentLname);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        async function getCompleted() {
        const response = await fetch (`https://kode-server.herokuapp.com/students/${studentId}/completedexercises`,{
            method: 'GET',
            headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('token') }});
        let data = await response.json();
        setCompleted(data)
        }
        getCompleted();
    },[])

    const useStyles = makeStyles({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh"
        },
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
            width: "400px",
            height: "300px",
            borderRadius: "10px"
        },
        card: {
            width: "80%",
        },
        nav: {
            fontWeight: "bold"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Nav />
            <Title />
            <h2>Details for {studentFname} {studentLname}</h2>
            {/* <Card className={classes.table}> */}
            <Box className={classes.box}>
            <Card className={ classes.cardStyle }>
                
                {/* {completed.map(work => 
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Topic</TableCell>
                            <TableCell>Difficulty</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableCell>{work.topic}</TableCell> 
                    <TableCell>{work.difficulty}</TableCell>
                    <TableCell>{work.score}</TableCell>
                </Table>)} */}

                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell className={classes.nav} align="center">Topic</TableCell>
                    <TableCell className={classes.nav} align="center">Difficult</TableCell>
                    <TableCell className={classes.nav} align="center">Score</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {completed.map((work) => (
                        <TableRow
                        key={work.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                         <TableCell align="center" component="th" scope="row"> {work.topic} </TableCell>
                         <TableCell align="center" component="th" scope="row"> {work.difficulty} </TableCell>   
                         <TableCell align="center" component="th" scope="row"> {work.score} </TableCell>   
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
                </TableContainer>
                
            </Card>
            </Box>
        </div>
    )
}

export default Details;