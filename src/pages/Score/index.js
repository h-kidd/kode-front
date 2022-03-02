import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { makeStyles, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import background from "../../img/background.jpg";
import { Title } from "../../components";
import { Results } from '../index';

const Score = () => {

  
    // Adding Material UI
    const useStyles = makeStyles({

      background: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "100vh",
      
      },
      cardStyle: {
        backgroundColor: "#140100"
      },
      box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        // boxShadow: "10px 10px 20px black;"

      },
      writing: {
        color: "white",
        fontSize: "20px"
      }
    });
  
    const classes = useStyles();
  
    return (
      <div className={classes.background}>
        <Title />
        <Table sx={{minWidth: 600}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell className={classes.writing} align="center">Name</TableCell>
            <TableCell className={classes.writing} align="center">Score</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* {results.map((result) => {
              const {Name, Score} = result
              return(
                <TableRow
                  key={Name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell align="left">{Name}</TableCell>
                  <TableCell align="right">{Score}</TableCell>
                </TableRow>
              )
            }

            )} */}
          </TableBody>
        </Table>
      </div>
    );
};
  
export default Score;
  