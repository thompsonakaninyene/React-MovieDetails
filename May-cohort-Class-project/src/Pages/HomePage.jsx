import "./Back.css";
import { useParams } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import heart from "../../assets/heart.png";
import india from "../../assets/india14.jpg";
import obong from "../../assets/obong1.png";
import mineq from "../../assets/mine 2.png";
import nef from "../../assets/mine1.png"
import ned from "../../assets/net4.jpg";
import mer from "../../assets/mercy.jpg";
import { useEffect } from "react";


export default
function Back() {
    const  {id} = useParams()
    const apikey = import.meta.env.VITE_API_KEY
    console.log(id);
    useEffect (() =>{
        const details = async () => {
            try {
                const resp = await fetch(`https://api.themoviedb.org/3/movie/603?api_key=${apikey}&append_to_response=credits,videos`)
                const data = await resp.json()
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        details()
}, [])
    
    return(
        <div className="main-back">
            <div className="carry-on">
                <header className="heart-header">
                    <span>
                        <img src={arrow} />
                        <p>Back</p>
                    </span>
                        <img src={heart} />
                </header>

                

                <section className="segment">
                   <div className="jack" >
                     <div>
                        <img className="common" src={india} />
                    </div>

                    <div>
                        <h2>The dark Knight</h2>
                        <div className="figure">
                            <h4>90</h4>
                            <p>2008</p>
                            <p>2h 32m</p>
                        </div>

                        <div className="btn-div">
                            <button>Action</button>
                            <button>Crime</button>
                            <button>Drama</button>
                        </div>

                        <p>Batman raises the stakes in his war on crime. with the help of Lt. Jim Gordon and District Attonrney harvey Dent, he sets out to dismantle the remaining criminal organizations that plaguethe streets. The partnership proves to beeffective, but they soon find themselves prey to a reign of chaos unleashed bya rising criminal mastermind known to the terrified citizens of Gotham as the Joker.</p>

                        <div className="watch-div">
                        <button className="add1">+ Add to Watchlist</button>
                        <button className="add2">Watch  traller</button>
                    </div>
                        <p className="over">Overview</p>
                        
                        <div className="overview-div">
                            <div className="director-div">
                                <p>Director</p>
                                <h4>Christopher Nolan</h4>
                            </div>
                            <div>
                                <p>Budget</p>
                                <h4>$118 million</h4>
                            </div>
                            <div>
                                <p>writers</p>
                                <h4>Janathan Nolan, Christopher Nolan</h4>
                            </div>
                        </div>

                        <div className="revenue-div">
                                <div>
                                    <p>Revenue</p>
                                    <h4>$1.0</h4>
                                </div>
                                <div>
                                    <p>Release Date</p>
                                    <h4>July 18, 2008</h4>
                                </div>
                                <div>
                                    <p>Status</p>
                                    <h4>Released</h4>
                                </div>
                        </div>

                        <span className="top-cast">
                            <h4>Top Cast</h4>
                            <p>&gt;</p>
                        </span>
                        <div className="images-div">
                                <div>
                                    <img src={obong} alt="" />
                                    <h4>Christian Bae</h4>
                                    <p>Batman</p>
                                </div>
                                <div>
                                    <img src={nef} alt="" />
                                    <h4>Heath Ledger</h4>
                                    <p>Joker</p>
                                </div>
                                <div>
                                    <img src={ned} alt="" />
                                    <h4>Aaron Eckhart</h4>
                                    <p>Harvey Dent</p>
                                </div>
                                <div>
                                    <img src={mer} alt="" />
                                    <h4>Michael Caine</h4>
                                    <p>Alfred</p>
                                </div>
                                <div>
                                    <img src={mineq} alt="" />
                                    <h4>Gary Oldman</h4>
                                    <p>James Gordon</p>
                                </div>
                        </div>
                    </div> 

                    
                     
                   </div>
                </section>
            </div>
        </div>
    )
}