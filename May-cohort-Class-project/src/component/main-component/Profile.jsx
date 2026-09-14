import "./Profile.css"
import Akan from "../../assets/Akan1.png";
import home from "../../assets/home1.png";
import discover from "../../assets/discover1.jpg";
import wath from "../../assets/watch.png";
import profile from "../../assets/profile.jpg";

export default
function Profile() {
    return(
        <div className="normal">
            <div className="General-profile">
            <header className="profile-header">
                 <h2>Profile</h2>
            </header>
            
            <section className="profile-section">
                <div className="profile-div">
                    <img src={Akan} />
                    <h2>Akaninyene M. Thompson.</h2>
                    <a href="#email">akaninyenethompson1@gmail.com</a>
                </div>
            </section>

            <section>
                <div className="general-div">
                    <div className="watch-lists">
                        <h3>Watchlist</h3>
                        <span>
                             <p>24 movies</p>
                            <p>&gt;</p>
                        </span>
                    </div>
                    <div className="favourite">
                        <h3>Favourites</h3>
                        <span >
                            <p>12 movies</p>
                            <p>&gt;</p>
                        </span>
                        
                    </div>
                    <div className="recent-view">
                        <h3>Recently Viewed</h3>
                        <span>
                            <p>8 movies</p>
                            <p>&gt;</p>
                        </span>
                    </div>
                </div>
            </section>

            <a className="log-gen" href="#">Log Out</a>

            <footer className="general-footee">
                <nav className="gen-foot">
                    <div className="home-foot">
                        <a href="#"><img  src={home} />
                        <p>Home</p></a>
                    </div>
                    <div className="discover-foot">
                       <a href="#"> <img src={discover} />
                        <p>Discover</p></a>
                    </div>
                    <div className="watchlist">
                        <a href="#"><img src={wath} />
                        <p>Watchlist</p></a>
                    </div>
                    <div className="profile">
                       <a href="#"> <img src={profile} />
                        <p>Profile</p></a>
                    </div>
                </nav>
            </footer>
        </div>
        </div>
    )
}