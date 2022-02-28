import React from "react";
import background from "../../img/background";
import { makeStyles } from "@material-ui/core";

const Background = () => {
    const useStyles = makeStyles({
        mainStyle: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover"
        }
    })

    const classes = useStyles();
}

export default Background;