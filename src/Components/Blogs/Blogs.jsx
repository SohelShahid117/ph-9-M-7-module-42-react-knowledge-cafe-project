import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch("./fakeData.json")
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>setBlogs(data))
    },[])
    console.log(blogs)
    return (
        <div>
            <h2>Hello world</h2>
            
        </div>
    );
};

export default Blogs;