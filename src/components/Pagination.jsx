/* eslint-disable react/prop-types */
const Pagination = ({handlePrev, handleNext, pageNo}) => {
    return (
        <div className="bg-gray-400 p-4 mt-5 flex justify-center">

            {pageNo > 1 && 
                <div className="px-4 hover:cursor-pointer" onClick={handlePrev}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            }

            <div>{pageNo}</div>

            <div className="px-4 hover:cursor-pointer" onClick={handleNext}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    )
}

export default Pagination