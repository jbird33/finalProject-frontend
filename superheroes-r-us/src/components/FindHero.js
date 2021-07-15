import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import UserInput from "./UserInput";
import HeroCard from "./HeroCard";
import Teams from "./Teams";

// My Access token: token: 10225883973708729

class FindHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroData: {},
            heroId: '',
            ready: false,
            userId: props.match.params.id
        }
    }

    // Define state for the rerquest.params.id of the user or profile and then pass it into my link below

    // Connecting to API here -------------------------------------------------

    fetchData = (inputValue) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10225883973708729/${inputValue}`)
            .then(response => {
                console.log(response)
                //   const heroData = response.data
                //   console.log(heroData)

                this.setState({
                    heroData: response.data,
                    ready: true
                })
            })
    }

    // Testing my fetchData function to make sure it is grabbing specified character
    // componentDidMount = () => {
    //     this.fetchData("620")
    // }

    // handleChange() below ---------------------------------------------------

    handleChange = (event) => {
        this.setState({
            heroId: event.target.value
        })
    }

    // handleSubmit() below ---------------------------------------------------

    handleSubmit = (event) => {
        event.preventDefault()
        this.fetchData(this.state.heroId)
    }

    // ------------------------------------------------------------------------

    // MAKE SURE TO TAKE OUT THE :ID IN ROUTE PATH=/findhero/:id (A reminder for possible issue)

    render() {
        console.log(this.state.heroData)
        console.log(this.state.heroId)
        console.log(this.state.userId)
        return (
            <div>

                <div className="header">
                    <div className="navigation">

                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                        <Link to={`/profile/${this.state.userId}`}><h3>Edit Profile</h3></Link>

                    </div>
                </div>

                {this.state.ready ? <HeroCard
                    heroData={this.state.heroData}
                    userId={this.state.userId}
                />
                    :

                    <UserInput
                        heroId={this.state.heroId}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                }

            </div>
        )
    }
}

export default FindHero