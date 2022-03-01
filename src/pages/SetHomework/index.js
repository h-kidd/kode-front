import { makeStyles } from "@material-ui/core";
import React from "react";
import { Title } from "../../components";
import background from '../../img/background.jpg';

const SetHomework = () => {

    const useStyles = makeStyles({
        background: {
            background: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh"
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Title />
        </div>
    )
}

export default SetHomework;