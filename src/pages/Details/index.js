import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles, Card, Table, TableCell, TableRow } from "@material-ui/core";
import background from '../../img/background.jpg';
import { Title } from "../../components";
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

        card: {
            width: "80%",
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
            <h2>Details for {studentFname} {studentLname}</h2>
            <Card className={classes.table}>
                
                {completed.map(work => 
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
                </Table>)}
                
            </Card>
        </div>
    )
}

export default Details;