import { tickStep } from "d3";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const Team1 = (props) => {

    function addMember () {
        // event.preventDefault()
        var team1new = this.state.props.team1.slice();
        team1new.push(props.name)
        this.setState({team1:team1new})

        // props.team1.push(props.name)
        // console.log(props.team1)

      

    }

    console.log(props.team1)
    return (
        <div>
            <h3> Here is Team1</h3>

            <button onSubmit={addMember()}>Add Hero/Villain to Team 1</button>
        </div>
    )
}

export default Team1