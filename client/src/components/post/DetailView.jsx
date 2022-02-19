import { Box,makeStyles, Typography } from "@material-ui/core";
import DefaultLayout from "../DefaultLayout";
import { Link ,useParams,useNavigate} from "react-router-dom";
import { Edit,Delete } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { deletePost, getPost } from "../../service/api";
import Comments from "../comments/Comments";


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
         objectFit:'cover',
         
     },
     icons:{
         float:"right"
     },
     icon:{
         margin:5,
         border:'1px solid #878787',
         padding:5,
         borderRadius:10
         
     },
     heading:{
         fontSize:38,
         fontWeight:600,
         textAlign:'center',
          padding:5,
         margin:'5px 0 10px 0'
     },
     subheading:{
         color:'#878787',
         display:'flex',
         margin: '20px 0',
         [theme.breakpoints.down('sm')]:{
           display:'block'  
         }
     },
     link:{
         color:'inherit',
         textDecoration:"none"
     }

}))

const DetailView=({match})=>{
    
    const classes=useStyle();
    const[post,setPost]=useState({});
    const {id}=useParams();
     const navigate=useNavigate();
    useEffect(()=>{
const fetchData=async()=>{
      let data= await getPost(id)
      console.log(data);
      setPost(data);
}
fetchData();
    },[])
     
    const deleted=async()=>{
        
         await deletePost(id)
        navigate('/home')
    }
    const url= post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return(
        <DefaultLayout>
            <Box className={classes.container}>
                <img src={url} alt="banner"  className={classes.image}/>
            
            <Box className={classes.icons}>
                 <Link to={`/update/${post._id}`}><Edit className={classes.icon} color='primary'/></Link>
                 <Delete onClick={()=>deleted()} className={classes.icon} color="error"/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
              <Link  className={classes.link} to={`/?username=${post.username}`}>  <Typography >Author:<span style={{fontweight:600}}> {post.username}</span></Typography></Link>
                <Typography style={{marginLeft:'auto'}}>{new Date(post.createDate).toDateString()}</Typography>
            </Box>
          <Typography style={{ whiteSpace:'pre-line'}}>
              {post.description}
          </Typography>
          <Comments post={post}/>
            </Box>
        </DefaultLayout>
       
    )
}

export default DetailView;
