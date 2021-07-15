import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Team1 from "./Team1";
import Team2 from "./Team2";


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroData: {},
            userId: props.match.params.id,
            heroId: props.match.params.heroid, // Need some help here
            // team1: ["Ant-Man"],
            combat: "",
            durability: "",
            intelligence: "",
            power: "",
            speed: "",
            team1Total: 0,
            team2Total: 0,
            imageUrl: "",

        }
    }

    componentDidMount = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10225883973708729/${this.state.heroId}`)
            .then(response => {
                console.log(response)
                this.setState({
                    heroData: response.data,
                    combat: parseInt(response.data.powerstats.combat),
                    durability: parseInt(response.data.powerstats.durability),
                    intelligence: parseInt(response.data.powerstats.intelligence),
                    power: parseInt(response.data.powerstats.power),
                    speed: parseInt(response.data.powerstats.speed),
                    imageUrl: response.data.image.url,
                    team1Total: parseInt(response.data.powerstats.combat) + parseInt(response.data.powerstats.durability) + parseInt(response.data.powerstats.intelligence) + parseInt(response.data.powerstats.power) + parseInt(response.data.powerstats.speed)

                })
            })
    }

    render() {
        console.log(this.state.team1Total)

        return (
            <div className="teams">

                <div className="header">
                    <div className="navigation">
                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                        <Link to={`/profile/${this.state.userId}`}><h3>Edit Profile</h3></Link>

                    </div>
                </div>

                <div className="aboutCard">

                    <div className="aboutTitle">
                        <h1 className="welcome">Build your Team and Compare Stats for an All-Powerful League!</h1>
                    </div>

                    <div className="heroesShowTeam">

                        <div className="team1">
                            <h1>Team 1</h1>
                            <Team1
                                team1Total={this.state.team1Total}
                                // team1={this.state.team1}
                                name={this.state.heroData.name}
                            />
                        </div>

                        <div className="pickHero">
                            <h1>.VS</h1>
                            <img src={this.state.imageUrl} alt="hero pic here" />
                            <h1>{this.state.heroData.name}</h1>

                        </div>

                        <div className="team2">

                            <h1>Team 2</h1>
                            <Team2
                                name={this.state.heroData.name}
                            />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Teams