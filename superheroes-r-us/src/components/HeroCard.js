import React from "react";

function HeroCard (props) {
    return (
        <div className="herocard">

            <h1>Let's Display Your Hero's PowerStats!</h1>

            <img src={props.heroData.image.url} alt="hero pic here" />

        </div>
    )
}


export default HeroCard