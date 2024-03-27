import React from 'react'
import PropTypes from 'prop-types'

const SingleBookMark = ({bkData}) => {
    // console.log(bkData)
    const {reading_time,title} = bkData
    return (
        <div className="flex justify-between bg-slate-100 rounded-lg m-4 p-4">
            <h1 className="text-3xl">{title}</h1>
            <h2 className="text-2xl">{reading_time}</h2>
        </div>
    );
};

SingleBookMark.propTypes = {
    bkData:PropTypes.array

}
//

export default SingleBookMark



//rafcp

// import React from 'react'
// import PropTypes from 'prop-types'

// const SingleBookMark = props => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// SingleBookMark.propTypes = {

// }

// export default SingleBookMark
