/* eslint-disable react/prop-types */
const WatchList = ({ watchList }) => {

    console.log(watchList);

    return (

        <>

            <div className="flex justify-center flex-wrap m-4 gap-2">
                <div className="flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-blue-300 hover:cursor-pointer">Action</div>
                <div className="flex justify-center h-[3rem] w-[9rem] rounded-xl items-center bg-gray-300 hover:cursor-pointer">Action</div>
            </div>

            <div className="flex justify-center my-4">
                <input type="text"
                    className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
                    placeholder="Search Movies..."
                />
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
                <table className="w-full text-gray-500 text-center">
                    <thead className="border-b-2">
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {watchList.map((movie) => {
                            return <tr key={movie.id}>
                                <td className="flex items-center px-6 py-4">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className=" w-[16rem] object-cover" />
                                    <div className="mx-10">
                                        {movie.original_title}
                                    </div>
                                </td>


                                <td>
                                    {movie.vote_average}
                                </td>

                                <td>
                                    {movie.popularity}
                                </td>

                                <td>
                                    Action
                                </td>

                                <td className="px-5">
                                    <i className="fa-solid fa-xmark text-red-700 hover:cursor-pointer"></i>
                                </td>
                            </tr>;
                        })}

                        <tr>
                            <td className="flex items-center px-6 py-4">
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN65EL66qMsJMe8s2uI2ZKZcREdCYbpBrlo23ZyekEXA&s'} className="h-[6rem] w-[10rem]" />
                                <div className="mx-10">
                                    Hello You
                                </div>
                            </td>


                            <td>
                                9.9
                            </td>

                            <td>
                                9
                            </td>

                            <td>
                                Action
                            </td>

                            <td className="px-5">
                                <i className="fa-solid fa-xmark text-red-700 hover:cursor-pointer"></i>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>

    )
}

export default WatchList