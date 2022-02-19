import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MatchUser } from '../service/api';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));


const initialUserr={
  UserName:'',
  Password:''
}

const Login = () => {
  const classes = useStyles();
    const navigate=useNavigate();
  const [userr,setUserr]=useState(initialUserr)

  const handleChange=(e)=>{
    setUserr({...userr,[e.target.name]:e.target.value})
     
}
const saveUser= ()=>{
    MatchUser(userr);
   
      navigate('/home');
  

    
     
}
const direct= ()=>{
 
  navigate('/home');
}

  return (
    <form className={classes.root} >
      <TextField
        label="User Name"
        name='UserName'
        variant="filled"
        required
        onChange={(e)=>handleChange(e)}
      />
     
     
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        name='Password'
        onChange={(e)=>handleChange(e)}
      />
      <div>
        <Button onClick={()=>direct()} variant="contained" >
          Sign In as Guest
        </Button>
        <Button onClick={()=>saveUser()} type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default Login;
