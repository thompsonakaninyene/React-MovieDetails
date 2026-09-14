import Logo from "../shared/logo";
import "./SubFull.css";
import icon from "../../assets/downloadIcon.png";
import doctors from "../../assets/doc.jpg";

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
  // if (!movie) {
  //   return(
  //     <h2>not found</h2>
  //   )
  // }



  return (
    <div className="main-div">
      <div className="head-div">

         <header className="header-cine">
          <div className="logo-scope">
            <span className="cine-span">
                <Logo />
            <h3 className="cineScope">CineScope</h3>
            </span>
            <div className="Home-div">
              <nav className="navigate">
                 <Link to="/">
                    <button className="navigated-button">Home</button>
                  </Link>
                  <Link to="/discoverMovie">
                    <button className="navigated button">Discover</button>
                  </Link>
               
                  <Link to="/watchPath">
                    <button className="navigated button">Watchlist</button>
                  </Link>
              </nav>

                 <div className="auth-div">
                  <Link to="/RegisterPath">
                    <button className="register-btn">Register</button>
                  </Link>
                  <Link to="/loginPath">
                    <button className="signin-btn">SignUp</button>
                  </Link>
                  
                </div>

              <div className="search-icon">
              <img className="img-icon" src={icon} />
              <img className="doc-icon" src={doctors} />
            </div>
            </div>
            
          </div>
      
        </header>
        <div className="feature-inter">
          <p>FUTURED</p>
          <h2>Interstellar</h2>
          
        </div>

        <div className="drama">
          <p className="save">🌟 8.7</p>
          <p className="two">2014</p>
          <p className="sci">Sci-Fi.Drama</p>
        </div>
       
        <p className="team-explore">
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity's survival.
        </p>
        <div className="watch-btn">
          <button className="watch-traller">Watch Traller</button>
          <button className="watch-list">+ Watchlist</button>
        </div>

       </ div>
         <h3 className="pop">Popular-Movies</h3>
        <div className="popular-movies">
            {popularMovies.map((movie) => {
                return(
                   
                    <Link to={`/movieDetails/${movie.id}`}>
                <div className="dark">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <p>{movie.title}</p>
                   <h4>{movie.release_date}</h4>
                </div>
              </Link>
                  
                   
                )
            })}
        </div>


            
        {/* <h3 className="show">Tv-Show</h3>
        <div className="tv-show">
            {tvShows.map((movie) => {
                return(
                    
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                        <p>{movie.title}</p>
                        <h4>{movie.release_date}</h4>
                        <p>{movie.Actors}</p>
                    </div>
                  
                )
            })}
        </div> */}

        <h2 className="top">Movie Top</h2>
        
        <div className="top-rated">
          {topRated.map((movie) => {
            return (
              
              <Link to={`/movieDetails/${movie.id}`}>
                <div className="dark">
                  <img
                    src={`  https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                  <p>{movie.title}</p>
                   <h4>{movie.release_date}</h4>
                </div>
              </Link>
              
            );
          })}
        </div>

        <h2 className="trending-movies">Trending Movies</h2>
        {loading ? <p>Loading...</p> :
        <div className="trending">
          {trendingMovies.map((movie) => {
            return (
              <Link to={`/movieDetails/${movie.id}`}>
                <div className="dark">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                  <p>{movie.title}</p>
                   <h4>{movie.release_date}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      

        }
        
      </div>
    
  );
}
