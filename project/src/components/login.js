// import React from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useState , useEffect } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Login = () => {
  const paperStyle = { padding: 50, width: 300, margin: "150px auto" };

  const navigate = useNavigate();
  const [email, setEmail]=useState("");//email use to store value 
  const [password, setPassword]=useState("");
 const[newEntry,setNewEntry]=useState("")
  const [res , setResponse] = useState([]);
  useEffect(()=>{
    const fetchData= async ()=>{
        const res =  await axios.get("http://localhost:8080/Login");
             console.log("res",res);
             setResponse(res); 
              
    }
fetchData()
 },[]);
 const SubmitForm=(e)=>{
  e.preventDefault();
  
  const newEntry={email:email, password:password};
  
  console.log("-->",newEntry);
  if (res) { // getItem can return actual value or null
    // console.log("--",res.email , res.email)
    res.data.map(({email,password})=>{
    if (email === newEntry.email) {
      if(password === newEntry.password)
      {console.log( " You Are Successfully Logged In");
      navigate("/signup");}
      else {
        alert("Email or Password is not matching with our record");
    }
    } else {
      alert("No users found. Please sign up.");
    }
  })
}


if (!email || !password) {
  alert("Please fill in all fields");
  return;
}
 
}

  return (
    <Grid container ="center" style={{ backgroundColor: "pink", height: "100vh" }}>
      <Paper elevation={10} style={paperStyle}>
        <form >
          <Typography variant="h5">Login</Typography>
          <TextField label="Email" placeholder="Enter Email" fullWidth required margin="normal" onChange={(e)=>setEmail(e.target.value)} value={email} autoComplete="off" />
          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            margin="normal"
            onChange={(e)=>setPassword(e.target.value)} value={password}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth onClick={SubmitForm}>
            Login
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: 10 }}>
          Don't have an account?
          <Link to='/signup'>Sign up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
