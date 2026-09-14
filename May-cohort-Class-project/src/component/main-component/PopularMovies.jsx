
export default

function popularMovies (){
    import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react"

export default function SubFull() {
  const { id } = useParams()

  const [tvShows, setTvShows] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trendingMovies, setTreadingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState('')

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const handlefetch = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTvShows(data.results);
        console.log(data.results);
        setPopularMovies(data.results)
        setLoading(false);
        setMovie(true)
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    handlefetch();
  }, []);

  useEffect(() => {
    const handleFatch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
        );
        const data = await response.json();
        console.log(data.results);
        setTopRated(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleFatch();
  }, []);

  useEffect(() => {
    const handlefetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`,
        );
        const data = await response.json();
        setTreadingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handlefetch();
  }, []);

  
  // /*react API */
  if (loading) {
    return(
      <h3>Please wait</h3>
    )
    
  }
    
    return(
        <div>
            <h3 className="pop">Popular-Movies</h3>
        <div className="popular-movies">
            {popularMovies.map((movie) => {
                return(
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                        <p>{movie.title}</p>
                        <h4>{movie.release_date}</h4>
                    </div>
                   
                )
            })}
        </div>
        </div>
    )
}