import {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";
import background from "../../img/background.jpg";
import { appendOwnerState } from "@mui/base";
import { Title, Nav } from "../../components";
import {  Card, Box, CardContent } from "@material-ui/core";
import { loadUser } from "../../actions";
import axios from "axios";


const TeacherLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();
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
            dispatch(loadUser(response.data.additional_claims.teacher_id, username, response.data.additional_claims.firstname, response.data.additional_claims.lastname, response.data.additional_claims.teacher_id, true))
            navigate('/teacher')
        }catch(error){
            setError("Invalid username or password")
        }     
    }   
       

    //Include Material UI
    //Include Material UI
    const useStyles = makeStyles ({
        // background: {
        //     backgroundImage: `url(${background})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     objectFit: "cover",
        //     height: "100vh",
        // },
        button: {
            backgroundColor: "lightblue",
            color: "black",
            borderRadius: "10px",
            marginTop: "10px",
            borderColor: "lightblue",
            width: "100px",
            height: "40px",
            '&:hover': {
                backgroundColor: '#006dbc',
                color: "white"
            
        }},
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
            <Nav />
        <Title />
        <Box className={classes.box}>
         <Card className={classes.cardStyle}>
           <CardContent className={classes.writing}> 
           <h1>Teacher Login!</h1>
           <p>{error}</p>
           {/* {(token && token!=="" && token!==undefined) ? "You are logged in with this token" + token: */}
           <div>
                
                <label>
                <input className={classes.customfieldinput} type="text" placeholder ="Username" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                <input className={classes.customfieldinput} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </label> 
                <br/>
                <Button className={classes.button} id="student" onClick={ handleClick }>Login </Button>
                        
                   
             </div> 
             {/* } */}
             </CardContent>
         </Card>
        </Box>
        </div>
       
    )
}

export default TeacherLogin;