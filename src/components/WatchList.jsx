/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import grenreId from "../utils/genreId";

/* eslint-disable react/prop-types */
const WatchList = ({ watchList, handleRemoveFromWatchlist, setWatchList }) => {

    const [genreList, setGenreList] = useState(["All"])
    const [search, setSearch] = useState('');
    const [currentGenre, setCurrentGenre] = useState("All");

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleCurrentGenre = (genre) => {
        setCurrentGenre(genre);
    }

    let setIncreasing = () => {
        let sortedIncreasing = watchList.sort((movieA, movieB) => {
            return movieA.vote_average - movieB.vote_average;
        });

        setWatchList([...sortedIncreasing])
    }

    let setDecreasing = () => {
        let sortedDeacreasing = watchList.sort((movieA, movieB) => {
            return movieB.vote_average - movieA.vote_average;
        });

        setWatchList([...sortedDeacreasing])
    }

    useEffect(() => {

        let temp = watchList.map((movie) => {

            let tempGenres = [];
            for (let genreId of movie.genre_ids) {
                tempGenres.push(grenreId[genreId]);
            }
            return [...tempGenres];

            // return grenreId[movie.genre_ids[0]];
        });

        temp = Array.from(new Set(temp.flat(1)));

        setGenreList(["All", ...temp]);

    }, [watchList]);



    return (

        <>

            <div className="flex justify-center flex-wrap m-4 gap-2">
                {genreList.map((genre, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex justify-center h-[3rem] w-[9rem] rounded-xl items-center hover:cursor-pointer ${currentGenre == genre ? "bg-blue-300" : "bg-gray-600/50"}`}
                            onClick={() => handleCurrentGenre(genre)}
                        >
                            {genre}
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center my-4">
                <input type="text"
                    className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
                    placeholder="Search Movies..."
                    onChange={(e) => handleSearch(e)}
                />
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
                <table className="w-full text-gray-500 text-center">
                    <thead className="border-b-2">
                        <tr>
                            <th>Name</th>
                            <th className="flex gap-3 items-center">
                                <i
                                    className="fa-solid fa-arrow-up cursor-pointer"
                                    onClick={setIncreasing}
                                ></i>
                                Rating
                                <i
                                    className="fa-solid fa-arrow-down cursor-pointer"
                                    onClick={setDecreasing}
                                ></i>
                            </th>
                            <th>Popularity</th>
                            <th>Genre</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {watchList
                            .filter((movie) => {
                                if (currentGenre == "All") {
                                    return true;
                                }
                                else {
                                    let temp = [];
                                    for(let id of movie.genre_ids) {
                                        temp.push(grenreId[id]);
                                    }
                                    if(temp.includes(currentGenre)) {
                                        return true;
                                    }
                                    else {
                                        return false;
                                    }
                                }
                            })
                            .filter((movieObj) => {
                                return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());
                            }).map((movie) => {
                                return (
                                    <tr key={movie.id}>
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

                                        <td className="gap-2 ">
                                            {movie.genre_ids.map((genreName, index) => {
                                                return (
                                                    <p key={index} className="mb-1 bg-blue-400 text-white rounded-xl">
                                                        {grenreId[movie.genre_ids[index]]}
                                                    </p>
                                                );
                                            })}
                                            {/* <span>
                                                { grenreId[movie.genre_ids[0]] }
                                            </span> */}
                                        </td>

                                        <td className="px-5">
                                            <i
                                                className="fa-solid fa-xmark text-red-700 hover:cursor-pointer"
                                                onClick={() => handleRemoveFromWatchlist(movie)}
                                            />
                                        </td>
                                    </tr>);
                            })}

                    </tbody>
                </table>
            </div>
        </>

    )
}

export default WatchList