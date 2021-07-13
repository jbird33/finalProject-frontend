import React from "react";
import { Link, Route } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">


            <div className="header">
                <div className="navigation">
                    <Link to="/about"><h3>About</h3></Link>
                    <Link to="/login"><h3>Login</h3></Link>
                    <Link to="/signup"><h3>Sign Up</h3></Link>
                </div>
            </div>

            <div className="aboutCard">

                <div className="aboutTitle">
                    <h1>Welcome to Superheroes-R-Us!</h1>
                </div>

                <div className="gifs">
                    <div className="gif1"></div>
                    <div className="gif2"></div>
                    <div className="gif3"></div>
                    <div className="gif4"></div>
                    <div className="gif5"></div>
                    <div className="gif6"></div>
                    <div className="gif7"></div>
                    <div className="gif8"></div>
                    <div className="gif9"></div>
                    <div className="gif10"></div>
                    <div className="gif11"></div>
                    <div className="gif12"></div>

                </div>

            </div>


        </div>
    )
}

export default Home