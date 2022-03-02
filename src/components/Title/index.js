import { createTheme, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";

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
        <ThemeProvider theme={theme}>
            <Typography variant="h1">Kode</Typography>
        </ThemeProvider>
    )
}

export default Title;