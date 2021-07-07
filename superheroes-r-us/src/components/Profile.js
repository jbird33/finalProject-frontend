import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditProfile from "./EditProfile";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                email: ""
            },
            userId: props.match.params.id

        }
    }

    // componentDidMount() below: ---------------------------------------------------

    componentDidMount = () => {
        console.log("Doing something here")
        axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
            .then(response => {
                console.log(response)
                console.log("Again something here")  // Not getting my response back here
                this.setState({
                    user: response.data.user
                })
            })
    }

    // handleChange() below: -------------------------------------------------------

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    // handleSubmit() below: ---------------------------------------------------------

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3001/users/profile/${this.props.match.params.id}`, this.state.user)
            .then(response => {
                console.log("Editting the User Here...")
            })
    }

    // handleDelete() below: ---------------------------------------------------------

    handleDelete = async (event) => {
        await axios.delete(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
            .then(response => {
                console.log("Deleting this User")
                //Redirect to homepage
                this.props.history.push('/')
            })
    }

    // render() below: --------------------------------------------------------------

    render() {
        const user = this.state.user
        console.log(this.state.userId)
        return (
            <div>


                <div className="header">
                    <div className="navigation">
                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                        {/* <Link to="/findhero/:id"><h3>Find a Hero</h3></Link> */}

                        <Link to={`/findhero/${this.state.userId}`}><h3>Find a Hero</h3></Link>

                    </div>
                </div>

                <div className="profile-body">

                    <h1>Welcome {user.name}, here is your Account information:</h1>

                    <form className="profile-form">
                        <legend><h1>Here is YOU!</h1></legend>
                        <h2>  <label htmlFor="name">Name: </label>{user.name}</h2>
                        <h2>  <label htmlFor="username">Username: </label>{user.username}</h2>
                        <h2>  <label htmlFor="password">Password: </label>{user.password}</h2>
                        <h2>  <label htmlFor="email">Email: </label>{user.email}</h2>

                    </form>

                    {/* <Link to="/findhero/:id"><h3>Find A Hero</h3></Link> */}
                    <Link to={`/findhero/${this.state.userId}`}><h3>Find a Hero</h3></Link>

                    <div className="profile-edit">

                        <EditProfile
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleDelete={this.handleDelete}
                        />

                    </div>

                </div>


            </div>
        )


    }

}

export default Profile

