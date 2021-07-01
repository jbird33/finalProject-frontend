import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>


            <div className="header">
                <div className="navigation">
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/about"><h3>About</h3></Link>
                    <Link to="/signup"><h3>Sign Up</h3></Link>
                </div>
            </div>

            <h1>Login Page!</h1>
            
        </div>
    )
}

export default Login