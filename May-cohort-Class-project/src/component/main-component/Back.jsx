import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../main-component/Back.css";
import { Link } from "react-router-dom";

export default function Back() {

    const { id } = useParams();

    const apikey = import.meta.env.VITE_API_KEY;

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [addToWatchlist, setAddToWatchlist] = useState(true);


    /** LOCAL STORAGE */
    const AddToWatchlist = (movie) => {

        let watchList =
            JSON.parse(localStorage.getItem("watchList")) || [];

        const exists = watchList.find(
            (item) => item.id === movie.id
        );

        if (!exists) {
            watchList.push(movie);
        }

        localStorage.setItem(
            "watchList",
            JSON.stringify(watchList)
        );

        setAddToWatchlist(false);
    };


    /** FETCH MOVIE DETAILS */
    useEffect(() => {

        const details = async () => {

            try {

                console.log("ID:", id);
                console.log("API KEY:", apikey);

                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&append_to_response=credits,videos`
                );

                const data = await response.json();

                console.log("API RESPONSE:", data);

                if (!response.ok) {
                    throw new Error(
                        data.status_message || "Something went wrong"
                    );
                }

                setMovie(data);

            } catch (error) {

                console.log("ERROR:", error);

                setError(error.message);

            } finally {

                setLoading(false);

            }
        };

        details();

    }, [id, apikey]);


    /** LOADING */
    if (loading) {
        return <h2>Loading...</h2>;
    }


    /** ERROR */
    if (error) {
        return <h2>Error: {error}</h2>;
    }


    /** NO MOVIE */
    if (!movie) {
        return <h2>No movie found</h2>;
    }


    return (

        <div className="main-back">

            {/* MOVIE BACKGROUND */}

            {movie.backdrop_path ? (

                <img
                    className="backdrop-image"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                />

            ) : (

                <div className="backdrop-image"></div>

            )}


            {/* DARK OVERLAY */}

            <div className="backdrop-overlay"></div>


            {/* CONTENT */}

            <div className="carry-on">

                <header>

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

                </header>


                <section className="segment">

                    <div className="jack">

                        {/* MOVIE POSTER */}

                        <div>

                            <img
                                className="common"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />

                        </div>


                        {/* MOVIE INFORMATION */}

                        <div>

                            <h2>
                                {movie.title}
                            </h2>


                            {/* MOVIE FIGURES */}

                            <div className="figure">

                                <h4>
                                    {Math.round(movie.vote_average * 10)}%
                                </h4>

                                <p>
                                    {movie.release_date
                                        ? movie.release_date.slice(0, 4)
                                        : "N/A"}
                                </p>

                                <p>
                                    {movie.runtime
                                        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                                        : "N/A"}
                                </p>

                            </div>


                            {/* GENRES */}

                            <div className="btn-div">

                                {movie.genres?.map((genre) => (

                                    <button key={genre.id}>
                                        {genre.name}
                                    </button>

                                ))}

                            </div>


                            {/* OVERVIEW */}

                            <p>
                                {movie.overview}
                            </p>


                            {/* MOVIE DETAILS */}

                            <div className="direct">

                                <div>
                                    <p>Director</p>

                                    <h4>
                                        {movie.credits?.crew?.find(
                                            (person) =>
                                                person.job === "Director"
                                        )?.name || "N/A"}
                                    </h4>
                                </div>


                                <div>
                                    <p>Budget</p>

                                    <h4>
                                        {movie.budget
                                            ? `$${(
                                                movie.budget / 1000000
                                            ).toFixed(0)} million`
                                            : "N/A"}
                                    </h4>
                                </div>


                                <div>
                                    <p>Revenue</p>

                                    <h4>
                                        {movie.revenue
                                            ? `$${(
                                                movie.revenue / 1000000
                                            ).toFixed(1)} million`
                                            : "N/A"}
                                    </h4>
                                </div>


                                <div>
                                    <p>Release Date</p>

                                    <h4>
                                        {movie.release_date || "N/A"}
                                    </h4>
                                </div>


                                <div>
                                    <p>Status</p>

                                    <h4>
                                        {movie.status || "N/A"}
                                    </h4>
                                </div>

                            </div>


                            {/* WATCHLIST BUTTON */}

                            <button
                                className="btn"
                                onClick={() =>
                                    AddToWatchlist(movie)
                                }
                            >

                                {addToWatchlist
                                    ? "▶ Add to watchList"
                                    : "Added"}

                            </button>


                            {/* TOP CAST */}

                            <h3>
                                Top Cast
                            </h3>


                            <div className="images-div">

                                {movie.credits?.cast
                                    ?.slice(0, 5)
                                    .map((person) => (

                                        <div key={person.id}>

                                            {person.profile_path && (

                                                <img className="carry-me"
                                                    src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                                    alt={person.name}
                                                />

                                            )}

                                            <h4>
                                                {person.name}
                                            </h4>

                                            <p>
                                                {person.character}
                                            </p>

                                        </div>

                                    ))}

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
}