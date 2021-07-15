import { tickStep } from "d3";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class Team2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team2: ["Atom Girl", "Yoda", "Superman", "Godzilla"],
            name: props.name,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let team2 = [...this.state.team2];

        team2.push(this.props.name);
        console.log(team2)
        
        this.setState({
            team2: team2,
            name: ''
        })        
    }


    render() {
        console.log(this.props.name)
        // console.log(this.team1)
        return (
            <div>
                <h4> Here is Team 2:</h4>

                <div className="teamMates">

                    {this.state.team2.map(name => {
                        return (
                            <li>{name}</li>
                        )
                    })}

                    <h4>Total Stats: 1290 pts</h4>

                </div>

                <form onSubmit={this.handleSubmit}>
                <button type='submit'>Add to Team 2</button>
                </form>            

            </div>
        )
    }
}

export default Team2