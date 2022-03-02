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
    const navigate = useNavigate()
    // const login = () => {
    //     navigate('/teacher')
    // }

    const handleClick = async () => {
        try{
            let response = await axios.post('https://kode-server.herokuapp.com/token/teacher',{
                username: username,
                password: password
            })
            console.log(response)
            
            localStorage.setItem("token",response.data.access_token)
            localStorage.setItem("teacher_id", response.data.additional_claims.teacher_id)
            localStorage.setItem("firstname", response.data.additional_claims.firstname)
            localStorage.setItem("lastname", response.data.additional_claims.lastname)
            
            navigate('/teacher')
        }catch(error){
            console.log(error)
            console.log(error.status)
            console.log(error.headers) 
        }     
    }   
       

    //Include Material UI
    //Include Material UI
    const useStyles = makeStyles ({
        background: {
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectFit: "cover",
            height: "100vh",
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
            justify: "center",
            alignItems: "center",
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
            
        },
        placeholder: {
            position: "absolute",
            left: "12px",
            bottom: "50%",
            top: "22px",
            transform: "translateY(-50%)",
            width: "calc(100% - 24px)" , 
            color: "#aaa",
            overflow: "hidden",
            whitespace: "nowrap",
            textoverflow: "ellipsis"
        },
        cardStyle: {
            backgroundColor: "white",
            width: "400px",
            borderRadius: "10px",
            boxShadow: "10px 10px 20px black;"
      
      
          },
          box: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px"
            
      
          },
          writing: {
            color: "black",
            fontSize: "20px"
          }
        })
    
        const classes = useStyles();
    return (
       
        <div className={classes.background}>
        <Title />
        <Box className={classes.box}>
         <Card className={classes.cardStyle}>
           <CardContent className={classes.writing}> 
           <h1>Teacher Login!</h1>
           {/* {(token && token!=="" && token!==undefined) ? "You are logged in with this token" + token: */}
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
             {/* } */}
             </CardContent>
         </Card>
        </Box>
        </div>
       
    )
}

export default TeacherLogin;