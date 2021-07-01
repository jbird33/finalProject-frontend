import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            

            <div className="header">
                <div className="navigation">
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/login"><h3>Login</h3></Link>
                    <Link to="/about"><h3>About</h3></Link>
                </div>
            </div>

            <h1>Sign Up Page!</h1>

        </div>
    )
}

export default SignUp