import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createUser } from '../service/api';

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

const initialUser={
    UserName:'',
    Email:'',
    Password:''
}
const SignUp = () => {
  const classes = useStyles();
  
  const [user,setUser]=useState(initialUser)

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   
}
const saveUser= async()=>{
    createUser(user);
}


 

  return (
    <form className={classes.root} onSubmit={()=>handleChange("event",1)} >
      <TextField
        label="UserName"
        name='UserName'
        variant="filled"
        required
        onChange={(e)=>handleChange(e)}
       
      />
      
      <TextField
        label="Email"
        name='Email'
        variant="filled"
        type="email"
        required
        onChange={(e)=>handleChange(e)}
      />
      <TextField
        label="Password"
        name='Password'
        variant="filled"
        type="password"
        required
        onChange={(e)=>handleChange(e)}
      />
      <div>
        <Button onClick={()=>saveUser()}
         type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default SignUp;