import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {

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
                  <Movies />
                {" "}
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
