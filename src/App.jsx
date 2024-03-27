import './App.css'
import Headers from './Components/Headers/Headers'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App(){

  const [bookMark,setBookMark] = useState([])

  const handleAddToBookMark = (blog) =>{
    // console.log('bookmark added')
    const newBookMarks = [...bookMark,blog];
    setBookMark(newBookMarks);
  }
  // console.log(bookMark);
  
  return (
    <>
  
      <Headers></Headers>
      <div className='flex max-w-6xl mx-auto'>
          <Blogs handleAddToBookMark = {handleAddToBookMark}></Blogs>
          <Bookmarks bookMark={bookMark}></Bookmarks>
      </div>
    
    </>
  )

}


export default App
