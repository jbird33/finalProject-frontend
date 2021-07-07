import React, { Component } from "react";

class HeroCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: props.heroData.image.url,
            name: props.heroData.name,
            combat: parseInt(props.heroData.powerstats.combat),
            durability: parseInt(props.heroData.powerstats.durability),
            intelligence: parseInt(props.heroData.powerstats.intelligence),
            power: parseInt(props.heroData.powerstats.power),
            speed: parseInt(props.heroData.powerstats.speed),
            barGraph: [parseInt(props.heroData.powerstats.combat),parseInt(props.heroData.powerstats.durability),parseInt(props.heroData.powerstats.intelligence),parseInt(props.heroData.powerstats.power),parseInt(props.heroData.powerstats.speed)]

        }
    }





    render() {
        // let combat = parseInt(this.state.combat);
        // let durability = parseInt(this.state.durability);
        // let intelligence = parseInt(this.state.intelligence);
        // let power = parseInt(this.state.power);
        // let speed = parseInt(this.state.speed);
        console.log(this.state.barGraph)
        
        return (
            <div className="herocard">


                <h1>Let's Display Your Hero's PowerStats!</h1>


                <img src={this.state.imageUrl} alt="hero pic here" />
                <h2>Name: {this.state.name}</h2>
                <h3>Combat: {this.state.combat} </h3>
                <h3>Durability: {this.state.durability}</h3>
                <h3>Intelligence: {this.state.intelligence}</h3>
                <h3>Power: {this.state.power}</h3>
                <h3>Speed: {this.state.speed}</h3>
                {/* <h3>OVERALL: {this.state.combat+this.state.durability+intelligence+power+speed}</h3> */}




            </div>
        )
    }


}





export default HeroCard