import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>


            <div className="header">
                <div className="navigation">
                    <Link to="/"><h3>Home</h3></Link>
                    <Link to="/login"><h3>Login</h3></Link>
                    <Link to="/signup"><h3>Sign Up</h3></Link>
                </div>
            </div>

            <div className="aboutCard">

                <div className="aboutTitle">
                    <h1 className="welcome">About this Site...</h1>
                </div>
                <div className="aboutShow">

                    <div className="animate"></div>

                    <div className="words">

                        <p>For years now, comic book fans have been struggling to decide which side to cling to! Does Marvel and their expanisve Marvel Universe, have the fulfilling "repertoire" of characters needed to quench my thirst for drama, action, fantasy, AND comedic prose? Or is DC Comics the path for me, with their unbeatable Superman, repeatedly visited variations of Batman, or the unwavering integrity of Wonder Woman? What about all the other cool Heroes and Villains from other amazing mediums? Someone say Darth Vader much?<br></br><br></br> Well, wait no more! Here at Superheroes-R-Us you can see random Heroes and Villains across ALL spectrums of the comic Universe! Everything from Hercules to Godzilla, and everything in between. Build a team of Heroes or Villains and compare the Powerstats. Assemble the greatest League to ever exist: in all worlds! Most of all, JUST HAVE FUN! </p>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default About