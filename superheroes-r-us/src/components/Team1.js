import { useHistory } from "react-router-dom";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";


class Team1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            team1: ["Darth Vader", "Raphel", "Wonder-Woman", "Rey"],
            name: props.name,
            // userId: props.match.params.id,

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let team1 = [...this.state.team1];

        team1.push(this.props.name);
        console.log(team1)

        this.setState({
            team1: team1,
            name: ''
        })
        // this.props.history.goBack()
    }


    render() {
        console.log(this.props.name)
        console.log(this.team1)

        return (
            <div>
                <h4> Here is Team 1:</h4>

                <div className="teamMates">

                    {this.state.team1.map(name => {
                        return (
                            <li>{name}</li>
                        )
                    })}

                    <h4>Total Stats: 1290 pts</h4>

                </div>

                <form onSubmit={this.handleSubmit}>
                    <button type='submit'>Add to Team 1</button>
                </form>





                {/* {this.state.team1.map(team => {
                    return(
                        <h3>{team}</h3>
                    )
                })} */}


            </div>
        )
    }

}

export default Team1