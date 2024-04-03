const Banner = () => {
  return (
    <div 
        className="h-[20vh] md:h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url('https://i.pinimg.com/originals/0a/d8/1d/0ad81db4e845c3a230e1367f26dea02e.jpg')` }}>
            
            <div className="text-white text-3xl text-center w-full bg-blue-900/60 py-2">
                Avengers
            </div>

    </div>
  )
}

export default Banner