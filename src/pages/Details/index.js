import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles, Card, Table, TableCell } from "@material-ui/core";
import background from '../../img/background.jpg';
import { Title } from "../../components";

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
                <Table>
                    <TableCell align="center">Homework</TableCell>
                    <TableCell align="center">Score</TableCell>
                </Table>
                {completed.map(work => <div><span>{work.topic} {work.difficulty}</span> <span>{work.score}</span></div>)}
            </Card>
        </div>
    )
}

export default Details;