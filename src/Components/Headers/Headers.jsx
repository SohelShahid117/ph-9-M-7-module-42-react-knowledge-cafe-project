import author from '../../assets/image/author.jpg'

const Headers = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4 border-b-4'>
            {/* <h1 className='text-3xl bg-red-200'>ph-9-M-7-module-42-react-knowledge-cafe-project</h1> */}
            <h1 className='text-3xl font-bold'>ph-9-M-7-module-42-react-knowledge-cafe-project</h1>
            <img src={author} className='rounded-full'></img>
        </div>
    );
};

export default Headers;