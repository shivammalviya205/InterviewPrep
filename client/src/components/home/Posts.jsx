import Post from "./Post";
import { Grid,Box } from "@material-ui/core";
import {Link,useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import { getAllPosts } from "../../service/api";

const Posts=()=>{
    const[posts,setPosts]=useState([]);
    const {search}=useLocation();
    useEffect(() => {
        const fetchData = async () => { 
            let data = await getAllPosts(search); // params in url
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [search]);

    return (
        <>
        {
             posts.map(post => (
                <Grid item lg={3} sm={4} xs={12}>
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/details/${post._id}`}>
                        <Post post={post} />
                    </Link>
                </Grid>
            ))
        }
    </>
       )
}

export default Posts;