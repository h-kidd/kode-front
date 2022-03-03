import React from "react";
import { makeStyles, Card, Table, TableCell } from "@material-ui/core";
import background from '../../img/background.jpg';
import { Title } from "../../components";

const Details = () => {

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
            Details for user
            <Card className={classes.table}>
                <Table>
                    <TableCell align="center">Homework</TableCell>
                    <TableCell align="center">Score</TableCell>
                </Table>
            </Card>
        </div>
    )
}

export default Details;