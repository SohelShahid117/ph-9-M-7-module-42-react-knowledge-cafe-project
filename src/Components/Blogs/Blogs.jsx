import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([])
    // console.log(handleAddToBookMark)
    // console.log(handleMarkAsRead)

    useEffect(()=>{
        fetch("./fakeData.json")
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>setBlogs(data))
    },[])

    // console.log(blogs)

    return (
        <div className="w-2/3">
            <h2>Blogssssssss:{blogs.length}</h2>
            {/* <SingleBlog></SingleBlog> */}

            {
                blogs.map( (blog) => <SingleBlog
                 key={blog.id} 
                 blog={blog}
                 handleAddToBookMark = {handleAddToBookMark}
                 handleMarkAsRead = {handleMarkAsRead}
                 ></SingleBlog>)
            }
            
        </div>
    );
};

export default Blogs;