/* eslint-disable react/prop-types */
const MovieCard = ({title, poster, movie, handleAddToWatchlist, handleRemoveFromWatchlist, watchList}) => {

    // console.log(movie);


    function doesContain(movie) {
      for(let i = 0; i < watchList.length; i++) {
        if(watchList[i].id == movie.id) {
          return true
        }
      }
      return false;
    }

    
    


  return (
    <div 
        className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex justify-center items-end overflow-hidden relative"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})` }}    
    >
        {
          doesContain(movie) ? 
          <div 
          className="absolute top-3 right-3 text-2xl"
          onClick={() => handleRemoveFromWatchlist(movie)}> 
              &#9940;
          </div>
          :
          <div 
          className="absolute top-3 right-3 text-2xl"
          onClick={() => handleAddToWatchlist(movie)}> 
              &#128525; 
          </div>
          
        }

        <h6 className="text-white text-center w-full py-2 bg-blue-950/60"> 
            {title} 
        </h6>
    </div>
  )
}

export default MovieCard