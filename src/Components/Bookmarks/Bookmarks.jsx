import SingleBookMark from "../SinglBookMark/SingleBookMark";

const Bookmarks = ({bookMark}) => {
    // console.log(bookMark)
    return (
        <div className="w-1/3 bg-gray-200">
            <h1 className="text-3xl">bookmarkssssssssssssssss:{bookMark.length}</h1>
            {
                bookMark.map((bk) => <SingleBookMark key={bk.id} bkData={bk}></SingleBookMark>)
            }
            
        </div>
    );
};

export default Bookmarks;