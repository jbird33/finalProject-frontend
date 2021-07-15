import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                email: ""
            }
        }
    }

    //--------------------------------------------------------------

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    // ----------------------------------------------------------------

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/users/signup", this.state.user)

            .then(response => {
                console.log(response)
                // this.props.history.push(`/profile/${response.data.id}`)
                this.props.history.push(`/findHero/${response.data.id}`)
            })
    }

    // -----------------------------------------------------------------

    render() {
        return (
            <div>

                <div className="header">
                    <div className="navigation">
                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/login"><h3>Login</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                    </div>
                </div>

                <div className="signup-body">
                    <div className="aboutCard">

                        <div className="aboutTitle">
                            <h1 className="welcome">Create an Account with Full Creds...</h1>
                        </div>

                        <div className="aboutShow">

                        <form className="signup-form" onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>Signing Up for Superheroes-R-Us</legend><br></br>
                                <label htmlFor="name">Name: </label>
                                <input onChange={this.handleChange} type="text" name="name" placeholder="name" /><br></br>
                                <label htmlFor="username">Username: </label>
                                <input onChange={this.handleChange} type="text" name="username" placeholder="username" /><br></br>
                                <label htmlFor="password">Password: </label>
                                <input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br>
                                <label htmlFor="email">Email: </label>
                                <input onChange={this.handleChange} type="text" name="email" placeholder="email" /><br></br><br></br>

                                <input type="submit" value="Sign Up" />
                            </fieldset>

                        </form>

                        <div className="animate"></div>

                        </div>

                    </div>

                </div>

            </div>
        )

    }

}

export default SignUp