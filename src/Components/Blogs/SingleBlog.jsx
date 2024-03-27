import PropTypes from 'prop-types'; // ES6
const SingleBlog = ({blog}) => {
    console.log(blog)
    return (
        <div>
                <h2>Single Blog</h2>
            
        </div>
    );
};


SingleBlog.propTypes = {
    // blog : PropTypes.object
    blog : PropTypes.object.isRequired
}
export default SingleBlog;