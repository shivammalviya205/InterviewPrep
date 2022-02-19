import { Box,Button,FormControl,InputBase,makeStyles, TextareaAutosize ,TextField} from '@material-ui/core';
import React, { useEffect } from 'react'
import { createCategory, createPost } from '../../service/api';
import DefaultLayout from '../DefaultLayout';
import {AddCircle} from '@material-ui/icons';
import { useState } from 'react';
import{ useNavigate} from 'react-router-dom'
const user = JSON.parse(localStorage.getItem('user'))
const nam=user?user.UserName:'demouser';

console.log(user);
const useStyle=makeStyles((theme)=> ({
    container:{
        padding: '0 100px',
        [theme.breakpoints.down('md')]:{
            padding:0
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    textField:{
        flex:1,
        margin:'0 30px',
        fontSize:25
    },
    create:{
        
        background:'#6495ED'
       
      },
      textarea:{
          width:'100%',
          marginTop:50,
          border:'none',
          fontSize:18,
         whiteSpace:'pre-line'
      }
}))

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: `${nam}`,
    categories: '',
    createDate: new Date()
}

const initialCategory={
    categories:'all'
}

function CreateView() {
    const classes=useStyle();
     
    
 
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
     const navigate=useNavigate();
    const [post,setPost]=useState(initialPost)
    const[category,setCategory]=useState(initialCategory)
      //console.log(user.UserName);
     
      
    const handleChange=(e)=>{
        
        setPost({...post,[e.target.name]:e.target.value })
          
            
        setCategory({...category,[e.target.name]:e.target.value})
       
    }

    const savePost= async()=>{
        // setPost({...post,'username':`${nam}`})
         createPost(post);
         createCategory(category);
         navigate('/home');
    }
    return (
        <DefaultLayout>
         <Box className={classes.container}>
             <img className={classes.image}   src={url} alt="" />
             <FormControl className={classes.form}>
             <AddCircle fontSize='large' color='action'/>
             <InputBase onChange={(e)=>handleChange(e)} name='title' placeholder='title' className={classes.textField}/>
             <Button onClick={()=>savePost()} variant="contained" className={classes.create}>Publish</Button>
             </FormControl>
             <Box className={classes.form}>
             <TextField 
             style={{margin:'20px'}}
             fullWidth 
             id="outlined-name"
                 label="Image url"
               
               onChange={(e)=>handleChange(e)}
               name='picture'
             />
             <TextField
             style={{margin:'20px'}}
             id="outlined-name"
                 label="category"
              
               onChange={(e)=>handleChange(e)}
               name='categories'
             />

             </Box>
             <TextareaAutosize
             minRows={5}
             placeholder='Tell your Story'
             className={classes.textarea}
             onChange={(e)=>handleChange(e)}
             name='description'
            
             />

             
         </Box>
        </DefaultLayout>
    )
}

export default CreateView;
