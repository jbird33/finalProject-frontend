import { tickStep } from "d3";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class Team2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team1: [],
            name: props.name

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let team1 = [...this.state.team1];
        team1.push(this .name);
        
        this.setState({
            team1,
            name: ''
        })        
    }


    render() {
        console.log(this.props.name)
        console.log(this.team1)
        return (
            <div>
                <h3> Here is Team1</h3>

                <form onSubmit={this.handleSubmit}>
                <button type='submit'>Add This Hero/Villain to Team 2</button>
                </form>

                {/* {this.state.team1.map(team => {
                    return(
                        {team}
                    )
                })} */}


            </div>
        )
    }

}

export default Team2