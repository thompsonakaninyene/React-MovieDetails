import "./Gallary.css"
import mine from "../../assets/downloadIcon.png"

export default
function Gallary() {
    return(
        <div className="gallary-div">
            <div className="start-div">
                <h1 className="ui">UI States Gallery</h1>
                <p className="come">Desktop component states for loading, errors, and empty results.</p>

                <section className="Alpha-div">
                <div className="loading-div">
                    <h3>Loading movies...</h3>
                    <p>Please wait.</p>
                </div>
                <div className="something-wrong">
                    <h3>Something went wrong.</h3>
                    <p>We couldn't load the movies.</p>
                    <button>Try Again</button>
                </div>
                <div className="No-movie">
                    <img className="mine-img" src={mine}  />
                    <h3>No movies found.</h3>
                    <p>Try searching for another movie.</p>
                    <button>Clear Search</button>
                </div>
                     
            </section>
            </div>

        </div>
    )
}