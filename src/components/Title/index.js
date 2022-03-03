import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import "./title.css"

const Title = () => {

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Architects Daughter'
            ].join(','),
            allVariants: {
                color: "white",
                

            },
            outline: "black"
        }
    });

    return (
        <div class="titlediv"> 
            <div class="emptydiv">
            </div>
             <ThemeProvider theme={theme}>
                <Typography variant="h1" class="kode">Kode</Typography>
            </ThemeProvider>
            <div class="emptydiv2">
            </div>
        </div>
       
    )
}

export default Title;