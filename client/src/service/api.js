import axios from 'axios';


const url = 'http://localhost:5000';
export const createPost = async (post) => {
    try {
        return await axios.post(`${url}/post/create`, post);
        
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${url}/post/getallposts${param}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const getPost=async(id)=>{
    try {
        let response=await axios.get(`${url}/post/getpost/${id}`)
          return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const updatePost=async(id,post)=>{
    try {
        await axios.post(`${url}/post/update/${id}`,post)

    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}


export const deletePost=async(id)=>{
   try {
    await axios.delete(`${url}/post/delete/${id}`)
   } catch (error) {
    console.log('Error while calling getPosts API ', error)
   }
}

export const newComment = async (comment) => {
    try {
        return await axios.post(`${url}/comment/new/`, comment);
    } catch(error) {
        console.log('Error while calling newComment API ', error)
    } 
}

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${url}/comment/getcomments/${id}`);
        return response.data;
    } catch(error) {
        console.log('Error while calling getComments API ', error)
    } 
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${url}/comment/delete/${id}`);
    } catch(error) {
        console.log('Error while calling deleteComments API ', error)
    } 
}

export const createCategory = async (category) => {
    try {
        return await axios.post(`${url}/category/create`, category);
        
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const getAllCategory = async () => {
    try {
        let response = await axios.get(`${url}/category/getallcategory`);
        
        return response.data;
    } catch (error) {
        console.log('Error while calling getPosts API ', error)
    }
}

export const createUser = async (user) => {
    try {
        return await axios.post(`${url}/user/create`, user);
        
    } catch (error) {
        console.log('Error while calling createPost API ', error);
    }
}

export const MatchUser = async (userr) => {
   
    try {
        let response= await axios.post(`${url}/user/login`, userr);
       
        localStorage.setItem('user' , JSON.stringify(response.data))
        const a = JSON.parse(localStorage.getItem('user'))
        console.log(a);

         
        
    } catch (error) {
       console.log(error);
    }
}
