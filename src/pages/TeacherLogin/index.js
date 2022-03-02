import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";
import { appendOwnerState } from "@mui/base";
import { Title } from "../../components";
import {  Card, Box, CardContent } from "@material-ui/core";
import axios from "axios";


const TeacherLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token") 
    
    const navigate = useNavigate()
    // const login = () => {
    //     navigate('/teacher')
    // }

    const handleClick = () => {
        axios({
            method: "POST",
            url: 'https://kode-server.herokuapp.com/token/teacher',
            data:{
                username: username,
                password: password
            }
        })
        .then((response) => { 
            console.log("success")
            
            navigate('/teacher') 
            sessionStorage.setItem(response.data.access_token)
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              }
          })
         
    }

   

    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // objectFit: "cover",
            height: "100vh"
        },
        button: {
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
            borderColor: "lightblue",
            width: "100px",
            height: "40px"
            
        },
        container: {
            backgroundColor: "white",
            height: "300px",
            width: "400px",
            padding: "20px",
            borderRadius: "20px",
            // position: "fixed",
            // marginTop: "250px",
            justify: "center",
            // marginLeft: "600px",
            // transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // direction: "column",
            marginTop: "100px",
            direction: "column",
            boxShadow: "10px 10px 20px black;"


        },
        customfield: {
            fontSize: "14px",
            position: "relative",
            bordertop: "20px solid transparent"

        },
        customfieldinput: {
            border: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            background: "#f2f2f2",
            padding: "12px",
            borderradius: "3px",
            margin: "10px"
            
        }
        })
    
        const classes = useStyles();
    return (
       
        <div className={classes.background}>
        <Box className={classes.box}>
         <Card className={classes.cardStyle}>
           <CardContent className={classes.writing}> 
           <h1>Teacher Login!</h1>
           {(token && token!=="" && token!==undefined) ? "You are logged in with this token" + token:
           <div>
                
                <label>
                <input className={classes.customfieldinput} type="text" placeholder ="Username" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                <input className={classes.customfieldinput} type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </label> 
                <br/>
                <button className={classes.button} id="student" onClick={ handleClick }>Login! </button>
                        
                   
             </div> 
             }
             </CardContent>
         </Card>
        </Box>
        </div>
       
    )
}

export default TeacherLogin;