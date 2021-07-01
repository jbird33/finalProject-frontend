import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            

            <div className="header">
                <div className="navigation">
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/login"><h3>Login</h3></Link>
                    <Link to="/signup"><h3>Sign Up</h3></Link>
                </div>
            </div>

            <h1>This is the About page!</h1>

        </div>
    )
}

export default About