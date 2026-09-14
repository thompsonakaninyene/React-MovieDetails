import "./DiscoverMovies.css"
import Logo from "../shared/logo"
import wheet from "../../assets/downloadIcon.png"
import wheel from "../../assets/doc.jpg"
import indian from "../../assets/india1.jpg";
import enter from "../../assets/india2.jpg";
import entre from "../../assets/india9.jpg";
import intreat from "../../assets/india4.jpg";
import edge from "../../assets/india5.jpg";
import win from "../../assets/india10.jpg";
import winned from "../../assets/india11.jpg";
import winning from "../../assets/india8.jpg";
import { Link } from "react-router-dom";

export default
function DiscoverMovies() {
    return(
         <div className="main-div">
             <div className="wait-div">
                 <header className="header-cine">
                <div className="logo-scope">
                    <span className="cine-scope">
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
                    </div>
                    <div className="icon">
                        <img src={wheet} />
                        <img src={wheel} />
                    </div>
                </div>
            </header>
                
                 <main>
                    <section>
                        <div className="discover-movies">
                                <h2>Discover Movies</h2>
                                <p>Explore and find your next fovourite movie.</p>
                        </div>

                        <div className="input-movie">
                            <span className="input-span">
                                {/* <img src={wheet} alt="icon" /> */}
                                <input type="text" name="text" className="movies-input" placeholder="Search movies"/>
                            </span>
                            <span className="all-genres-span">
                               
                                <button>All Ganres</button>
                            </span>
                            <span className="popular-span">
                                 
                                <button>Popular</button>  
                            </span>
                            <span className="release-date-span">
                                
                                <button>Release Date</button>

                            </span>
                            <button className="chip">hjjy</button>
                        </div>
                    </section>

                    <section className="movie-section1">
                                <div className="movie-flier1">
                                    <div>
                                        <img src={indian} />
                                        <h4>Dune Part Two</h4>
                                        <p>8.5</p>
                                    </div>
                                    <div>
                                        <img src={enter} />
                                        <h4>Oppenheimer</h4>
                                        <p>8.6</p>
                                    </div>
                                    <div>
                                        <img src={entre} />
                                        <h4>The Batman</h4>
                                        <p>7.6</p>
                                    </div>
                                    <div>
                                        <img src={intreat} />
                                        <h4>Top Gun</h4>
                                        <p>8.3</p>
                                    </div>
                                </div>
                    </section>

                    <section className="movie-section2">
                                    <div className="movie-flier1">
                                    <div>
                                        <img src={edge} />
                                        <h4>Guardians of the Galaxy Vol.3</h4>
                                        <p>8.0</p>
                                    </div>
                                    <div>
                                        <img src={win} />
                                        <h4>Interstellar</h4>
                                        <p>8.7</p>
                                    </div>
                                    <div>
                                        <img src={winned} />
                                        <h4>The Shawshank Redemption</h4>
                                        <p>9.3</p>
                                    </div>
                                    <div>
                                        <img src={winning} />
                                        <h4>Pulp Fiction</h4>
                                        <p>8.9</p>
                                    </div>
                                </div>

                    </section>
                </main>
                <footer>
                    <span className="horse">
                       &lt;
                       <p>1</p> <p>2</p> <p>3</p> <p>4</p> ... <p>20</p> &gt;
                    </span>
                </footer>
               </div>
        </div>
    )
}