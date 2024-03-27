import SingleBookMark from "../SinglBookMark/SingleBookMark";

const Bookmarks = ({bookMark,readingTime}) => {
    // console.log(bookMark)
    console.log(readingTime)
    return (
        <div className="w-1/3 bg-gray-200">
            <div>
                <h2 className="text-2xl">Reading Time is : {readingTime}</h2>
            </div>
            <h1 className="text-3xl">bookmarkssssssssssssssss:{bookMark.length}</h1>
            {
                bookMark.map((bk,indx) => <SingleBookMark key={indx} bkData={bk}></SingleBookMark>)
            }
            
        </div>
    );
};

export default Bookmarks;