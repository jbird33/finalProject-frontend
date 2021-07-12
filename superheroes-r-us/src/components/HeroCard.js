import React, { Component } from "react";
import * as d3 from "d3";
import { Link, Route } from "react-router-dom";
import Teams from "./Teams";

class HeroCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroId: props.heroData.id, // Not sure I need this but, experimenting here
            userId: props.userId,
            imageUrl: props.heroData.image.url,
            name: props.heroData.name,
            firstAppear: props.heroData.biography['first-appearance'],

            combat: parseInt(props.heroData.powerstats.combat),
            durability: parseInt(props.heroData.powerstats.durability),
            intelligence: parseInt(props.heroData.powerstats.intelligence),
            power: parseInt(props.heroData.powerstats.power),
            speed: parseInt(props.heroData.powerstats.speed),

            barGraph: [parseInt(props.heroData.powerstats.combat), parseInt(props.heroData.powerstats.durability), parseInt(props.heroData.powerstats.intelligence), parseInt(props.heroData.powerstats.power), parseInt(props.heroData.powerstats.speed)],

            barGraph2: ["Combat", "Intelligence", "Durability", "Speed", "Power"],

            myRef: React.createRef(), // This creates the reference used to hold by bargraph

        }
    }

    componentDidMount() {

        const svg = d3.select(this.state.myRef.current)
            .append("svg")
            .attr("width", 600)
            .attr("height", 500)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(this.state.barGraph)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 600 - 5 * d) // The 5 was a 10 but allowed me to see better
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")

        svg.selectAll("text")
            .data(this.state.barGraph)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 600 - (5 * d) - 3) // The before the (10 * d) was an h - for height
    }

    refreshPage = () => {
        window.location.reload(false);
    }


    render() {
        console.log(this.state.barGraph)
        console.log(this.state.userId)
        console.log(this.state.heroId)

        return (
            <div className="herocard">

                <div className="heroTitle">
                    <h1>Let's Display Your Hero's PowerStats!</h1>
                </div>

                <div className="heroesShow">

                    <div className="heroPic">
                        <img src={this.state.imageUrl} alt="hero pic here" />
                        <h2>Name: {this.state.name}</h2>
                        <h2>First Appeared in: {this.state.firstAppear}</h2>
                        <h1>OVERALL: {this.state.combat + this.state.durability + this.state.intelligence + this.state.power + this.state.speed}</h1>
                    </div>

                    <div className="bargraph" ref={this.state.myRef}> 
                    </div>

                    <div className="stats">

                        <h3>Combat: {this.state.combat} </h3>
                        <h3>Durability: {this.state.durability}</h3>
                        <h3>Intelligence: {this.state.intelligence}</h3>
                        <h3>Power: {this.state.power}</h3>
                        <h3>Speed: {this.state.speed}</h3>

                        <Link to={`/teams/${this.state.userId}/${this.state.heroId}`}>Add to your Team Here</Link><br></br>

                        

                        <button onClick={this.refreshPage}>Choose Again!</button>
                    </div>

                </div>

            </div>
        )
    }


}

export default HeroCard