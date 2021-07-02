import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: ""
            }

        }
    }

    handleChange = (event) => {
        
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        console.log("Hitting something here");
        event.preventDefault();
        axios.post("http://localhost:3001/users/login", this.state.user)
            .then(response => {
                console.log(response)
                this.props.history.push(`/profile/${response.data.id}`)
                // Trying to redirect to the FindHero() with the :id attached
                // this.props.history.push(`/findHero/${response.data.id}`)
                console.log("Logged In User")
                console.log(response.data.id)
            })
            .catch(err => {
                console.log(err)
                alert("Wrong Username or Password. Try Again")
            })

    }


    render() {
        return (
            <div>


                <div className="header">
                    <div className="navigation">
                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                        <Link to="/signup"><h3>Sign Up</h3></Link>
                    </div>
                </div>

                <div className="login-body">

                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Login</legend><br></br>
                            <label htmlFor="username">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" /> <br></br>
                            <label htmlFor="password">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br><br></br>
                            <input type="submit" value="Login" />
                        </fieldset>

                    </form>

                </div>



            </div>
        )


    }

}

export default Login