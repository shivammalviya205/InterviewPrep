import { Box,Button,FormControl,InputBase,makeStyles, TextareaAutosize,TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import DefaultLayout from '../DefaultLayout';
import {AddCircle} from '@material-ui/icons';
import { useParams,useNavigate} from 'react-router-dom';
import { getPost, updatePost } from '../../service/api';
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
         
      }
}))

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'demouser',
    categories: 'all',
    createDate: new Date()
}

function UpdateView() {
    const classes=useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    const navigate=useNavigate();
    const[post,setPost]=useState(initialPost);
    const {id}=useParams();
     
    useEffect(()=>{
const fetchData=async()=>{
      let data= await getPost(id)
      console.log(data);
      setPost(data);
}
fetchData();
    },[])

    const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
    }

    const update= async()=>{
         updatePost(id,post);
         navigate(`/details/${id}`);
    }
    return (
        <DefaultLayout>
         <Box className={classes.container}>
             <img className={classes.image}   src={url} alt="" />
             <FormControl className={classes.form}>
             <AddCircle fontSize='large' color='action'/>
             <InputBase placeholder='title'onChange={(e)=>handleChange(e)} name='title' value={post.title} className={classes.textField}/>
             <Button onClick={()=>update()} variant="contained" className={classes.create}>Update</Button>
             </FormControl>

             <Box className={classes.form}>
             <TextField 
             style={{margin:'20px'}}
             fullWidth 
             id="outlined-name"
                 label="Image url"
                value={post.picture}
               onChange={(e)=>handleChange(e)}
               name='picture'
             />
             <TextField
             style={{margin:'20px'}}
             id="outlined-name"
                 label="category"
                 value={post.categories}
               onChange={(e)=>handleChange(e)}
               name='categories'
             />

             </Box>
             <TextareaAutosize
             minRows={5}
             placeholder='Tell your Story'
             className={classes.textarea}
             value={post.description}
             name='description'
             onChange={(e)=>handleChange(e)}
             />

             
         </Box>
        </DefaultLayout>
    )
}

export default UpdateView;
