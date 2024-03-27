import './App.css'
import Headers from './Components/Headers/Headers'
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App(){
  
  return (
    <>
  
      <Headers></Headers>
      <div className='flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    
    </>
  )

}


export default App
