import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";

// My Access token: token: 10225883973708729

class FindHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroData: {}



        }
    }

    // Connecting to API here -------------------------------------------------

    fetchData = (InputValue) => {
        axios.get("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10225883973708729/620")
            .then(response => {
                console.log(response)
                //   const heroData = response.data
                //   console.log(heroData)

                this.setState({
                    heroData: response.data
                })
            })
    }

    componentDidMount = () => {
        this.fetchData()
    }

    // ------------------------------------------------------------------------

    // routeChange = (props) => {
    //     console.log("Doing something naughty!")
    //     axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
    //         .then(response => {
    //             this.props.history.push(`/profile/${response.data.id}`)
    //             this.setState({
    //                 user: response.data.user
    //             })
    //         })
    // }
    // MAKE SURE TO TAKE OUT THE :ID IN ROUTE PATH=/findhero/:id

    render() {
        console.log(this.state.heroData)
        return (
            <div>

                <div className="header">
                    <div className="navigation">
                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                        <Link to="/profile/:id"><h3>Edit Profile</h3></Link>

                    </div>
                </div>

                <h1>Find My Hero here!</h1>


            </div>
        )
    }
}

export default FindHero