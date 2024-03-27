import './App.css'
import Headers from './Components/Headers/Headers'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App(){

  const [bookMark,setBookMark] = useState([])

  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookMark = (blog) =>{
    // console.log('bookmark added')
    const newBookMarks = [...bookMark,blog];
    setBookMark(newBookMarks);
  }
  // console.log(bookMark);

  const handleMarkAsRead = (id,time) =>{
    // console.log(time)
    // setReadingTime(readingTime + time)
    const newreadingTime = readingTime + time;
    setReadingTime(newreadingTime)

    //remove mark as read

    // console.log('remove the id',id)

    // const remaingItemOrId = bookMark.filter((bk) => bk.id !== id)
    // // console.log(remaingItemOrId)
    // setBookMark(remaingItemOrId)
  }
  // console.log(bookMark)
  // console.log(readingTime)
  
  return (
    <>
  
      <Headers></Headers>
      <div className='flex max-w-6xl mx-auto'>
          <Blogs handleAddToBookMark = {handleAddToBookMark}  handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookMark={bookMark} readingTime={readingTime}></Bookmarks>
      </div>
    
    </>
  )

}


export default App
