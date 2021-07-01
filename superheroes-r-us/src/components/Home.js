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

            <h1>See my Homepage!</h1>
        </div>
    )
}

export default Home