/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {

  let [watchList, setWatchList] = useState([]);


  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchList, movieObj];

    localStorage.setItem('myWatchList', JSON.stringify(newWatchlist));

    setWatchList(newWatchlist);
    // console.log(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {

    let filteredMovies = watchList.filter((movie) => movie.id !== movieObj.id);

    localStorage.setItem('myWatchList', JSON.stringify(filteredMovies));
    setWatchList(filteredMovies);

    // console.log(filteredMovies);

  }

  // let [inpVal, setInpVal] = useState("");

  // useEffect( () => {
  //   console.log("I'm running");
  // }, [inpVal]);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                  <Banner />
                  {/* <input type="text" className="border" value={inpVal} onChange={(e) => setInpVal(e.target.value)} />  */}
                  <Movies 
                    watchList={watchList}
                    handleAddToWatchlist={handleAddToWatchlist}
                    handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
                {" "}
              </>
            }
          />

          <Route 
            path="/watchlist" 
            element={
                    <WatchList
                      watchList={watchList}
                    />
                    } 
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
