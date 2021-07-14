import React from "react";

function UserInput(props) {

    return (
        <div className="userimput">

            <div className="aboutCard">

                <div className="aboutTitle">
                    <h1 className="chooseHero">Choose a Hero or Villain by Selecting a Random Number 1-731:</h1>
                </div>



                <div className="aboutShow">
                    <form className="heroForm" onSubmit={props.handleSubmit}>
                        <input type="number"
                            className="input-number"
                            name="heroId"
                            placeholder="Random Hero ID Here.."
                            min="1"
                            max="731"
                            id="heroInput"
                            value={props.heroId}
                            onChange={props.handleChange} />

                        <input type="submit"
                            value="Submit" />
                    </form>

                    <img src="https://i.ebayimg.com/images/g/lg4AAOSw8QRf7K06/s-l300.png" alt="poster" />

                </div>

            </div>



        </div>
    )
}

export default UserInput