import PropTypes from 'prop-types'; // ES6
// import { FaBeer } from "react-icons/fa";
// import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

const SingleBlog = ({blog,handleAddToBookMark}) => {
    // console.log(blog)
    // console.log(handleAddToBookMark)
    const {title,cover_image,author_image,author,reading_time,posted_date,hash_tags} = blog;
    // console.log(title)
    return (
        <div>
                {/* {/* <h2>Single Blog</h2> */}
                <img className='w-full mb-5' src={cover_image}></img>

                <div className='flex justify-between mb-4'>
                    <div className='flex'>
                        <img className='w-14 rounded-full' src={author_image} alt="" srcset="" />
                        <div className='ml-6'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        {/* <span>{reading_time} min read <FaBeer /> </span> */}
                        <span>{reading_time} min read </span>
                        <button onClick={()=>handleAddToBookMark(blog)} className='ml-5 text-red-700'><BsBookmarkFill /></button>
                    </div>
                </div>

                <h2>{title}</h2>

                <p>
                    {
                        hash_tags.map((hash,indx)=> <span key={indx} className='mr-5'><a href='#' target='_blank'>#{hash}</a></span>)
                    }
                </p>
        </div>
    );
};


SingleBlog.propTypes = {
    // blog : PropTypes.object
    blog : PropTypes.object.isRequired
    // handleAddToBookMark: PropTypes.func
}
export default SingleBlog;

//5 min