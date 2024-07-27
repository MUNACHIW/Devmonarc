import axios from "axios"
import React, { useState } from "react";
function Post(){
    const [title, setTitle] =  useState('')
    const [post ,  setPost] = useState('')
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post('https://backendportfolio-0tqd.onrender.com/api/blogpost', {title, post});
            if (response.data.message == "It seems admin is not signed up"){
               window.location.href = '/admin'
             }
             if (response.status === 200){
                window.location.href = '/blog';
             }else{
                console.log('Unauthorised', response.data.message)
             };

        }catch(error){
               console.log('Error indicating server or client failure', error);

        }
    };

    return(
    <div>
       <h1>Post Your Blog (only mearnt for site Admin)</h1>
       <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"  placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                 <div>
                    <textarea name="" id="" placeholder="Blogtext" value={post} onChange={(e) => setPost(e.target.value)}>

                    </textarea>
                 </div>
                 <button type="Submit">Post</button>
       </form>
    
    </div>)
}
export default Post