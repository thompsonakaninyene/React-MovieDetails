
import "./WatchList.css";
import Logo from "../shared/logo";
import watch from "../../assets/downloadIcon.png";
import list from "../../assets/lord.jpg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WatchList() {

    const [movieFromStorage, setMovieFromStorage] = useState([]);
    const [deleteWatchList, setDeleteWatchList] = useState(true)
    const [loading, setIsLoading] = useState(true)
    const [clearList, setClearList] = useState(true)

    // Get watchlist movies from localStorage
    useEffect(() => {

        const savedMovies =
            JSON.parse(localStorage.getItem("watchList")) || [];

        console.log("Watchlist:", savedMovies);

        setMovieFromStorage(savedMovies);

    }, []);


    // Delete individual movie
    const DeleteFromWatchList = (movieId) => {

        const updatedWatchList = movieFromStorage.filter(
            (movie) => movie.id !== movieId
        );
         

        // Update React state
        setMovieFromStorage(updatedWatchList);

        // Update localStorage
        localStorage.setItem(
            "watchList",
            JSON.stringify(updatedWatchList)
        );
        setDeleteWatchList(false)
        setIsLoading(false)
       
    };

    const ClearWatchList = () => {
        setMovieFromStorage([])
        localStorage.removeItem("watchList")
         setClearList(false)
          
    }


    return (
        <div className="bam-div">
            
            <div className="back-div">

                {/* HEADER */}
                <header className="header-dine">

                    <span className="logo1">
                        <Logo />
                        <h3 className="cineScope">
                            CineScope
                        </h3>
                    </span>


                    <nav className="navigate">

                        <Link to="/">
                            <button className="navigated-button">
                                Home
                            </button>
                        </Link>


                        <Link to="/discoverMovie">
                            <button className="navigated button">
                                Discover
                            </button>
                        </Link>


                        <Link to="/watchPath">
                            <button className="navigated button">
                                Watchlist
                            </button>
                        </Link>

                    </nav>


                    <span className="mine-span">

                        <img className="search" src={watch} alt="watch" />

                        <img className="lord" src={list} alt="list" />

                    </span>

                </header>


                <main>

                    {/* TITLE */}
                    <section>
                           
                        <div className="discover-movies">
                            
                            <h2>
                                My WatchList
                            </h2>

                            <p>
                                Movies you've saved for later.
                            </p>

                        </div>

                    </section>


                    {/* MOVIES */}
                    <section className="movie-section1">

                        <div className="movie-flier1">
                           

                            {movieFromStorage.map((movie) => (

                                <div 
                                    key={movie.id}
                                    className="movie-card"
                                > 
                                    
                                    {/* TMDB IMAGE */}
                                    <img 
                                        src={
                                            movie.poster_path
                                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                                : "/placeholder.jpg"
                                
                                        }
                                        alt={movie.title}
                                       
                                    />
                                        

                                    <span className="waiter-span">

                                        <span className="waiter">

                                            <h4>
                                                {movie.title}
                                            </h4>
                                            <p>
                                                {movie.release_date}
                                            </p>

                                            <p>
                                                ⭐{" "}
                                                {movie.vote_average
                                                    ? movie.vote_average.toFixed(1)
                                                    : "N/A"}
                                            </p>

                                        </span>


                                        {/* DELETE BUTTON */}
                                        <button
                                            className="delete-btn"
                                            onClick={ ()=>
                                                DeleteFromWatchList(movie.id)
                                            }
                                        >
                                           {deleteWatchList ? "Delete" : "Deleted"}
                                        </button>

                                    </span>

                                </div>

                            ))}

                        </div>
                        <button className="clear-btn" onClick={  
                            ClearWatchList}>
                            {clearList ? "Clear WatchList" : "Cleared"}
                            
                        </button>

                    </section>

                </main>


                {/* EMPTY WATCHLIST */}
                {movieFromStorage.length === 0 && (

                    <footer className="watch-me">

                        <div>

                            <Logo />

                            <h2>
                                Your watchlist is empty.
                            </h2>

                            <p>
                                Save movies to find them here.
                            </p>

                        </div>

                    </footer>

                )}

            </div>

        </div>
    );
}

