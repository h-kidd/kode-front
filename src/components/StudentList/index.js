import { Button, Card, CardContent, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import React, {useEffect, useState} from 'react';

const StudentList = () =>  {
    const [classRoster, setClassRoster] = useState([]);

    useEffect(() => {
        async function getClassRoster() {
            const response = await fetch ('insert url here',{
                method: 'GET',
                headers: { "Content-Type": "application/json", "Authorization": "Bearer " + localStorage.getItem('accessToken') }});
            let data = await response.json();
            setClassRoster(data)
        }
        getClassRoster();
    },[])

    const renderClassRoster = () => classRoster.map(student => <div><h3>{student.firstname} {student.lastname}</h3> <button id={student.username}>Join Game</button></div>)

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
            // position: "fixed",
            // marginTop: "270px",
            // marginLeft: "275px",
            // transform: "translate(-50%, -50%)",
            // flexDirection: "column",
            // alignItems: "left",
            // display: "flex",
            
            },
        header: {
            backgroundColor: "lightGrey"
        },
        h3: {
            color: "black",
            // textAlign: "left",
            paddingLeft: "20px"
        },
        buttonEdit: {
            justifyContent: "left",
            backgroundColor: "orange",
            marginBottom: "10px",
            color: "white"
        },
        buttonAdd: {
            backgroundColor: "blue",
            marginBottom: "10px",
            color: "white",
            marginLeft: "20px"
        }
    })

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.container}>
                <h3 className={classes.h3}>Class 1</h3>
                <Button variant="contained" className={classes.buttonEdit}>
                    Edit Students
                    <EditIcon />
                </Button>
                <Button variant="contained" className={classes.buttonAdd}>
                    Add Students
                    <AddIcon />
                </Button>
            

            <CardContent>
            <div>
                {renderClassRoster()}
            </div>
            </CardContent>
            </Card>
        </div>
    )
}

export default StudentList;