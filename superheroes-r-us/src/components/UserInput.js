import React from "react";

function UserInput (props) {
    
    return (
        <div className="userimput">

            <h1>Choose a Hero or Villain by Selecting a Random Number 1-731:</h1>

            <form onSubmit={props.handleSubmit}>
                <input type="text"
                    name="heroId"
                    placeholder="Random Hero ID Here.."
                    value={props.heroId}
                    onChange={props.handleChange} />

                <input type="submit"
                    value="Submit" />
            </form>

           


        </div>
    )
}

export default UserInput