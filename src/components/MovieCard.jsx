const MovieCard = ({title, poster, movie}) => {

    console.log(movie);

  return (
    <div 
        className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex justify-center items-end overflow-hidden"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})` }}    
    >
        <h6 className="text-white text-center w-full py-2 bg-blue-950/60"> 
            {title} 
        </h6>
    </div>
  )
}

export default MovieCard