import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
// import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';



class FindHero extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    // routeChange = (props) => {
    //     console.log("Doing something naughty!")
    //     axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
    //         .then(response => {
    //             this.props.history.push(`/profile/${response.data.id}`)
    //             this.setState({
    //                 user: response.data.user
    //             })
    //         })
    // }
    // MAKE SURE TO TAKE OUT THE :ID IN ROUTE PATH=/findhero/:id

    render() {
        return (
            <div>

                <div className="header">
                    <div className="navigation">
                        <Link to="/"><h3>Home</h3></Link>
                        <Link to="/about"><h3>About</h3></Link>
                        <Link to="/profile/:id"><h3>Edit Profile</h3></Link>

                    </div>
                </div>

                <h1>Find My Hero here!</h1>

                {/* <Link color="primary" className="px-4"
                    onClick={this.routeChange}
                >
                    Profile Page
                </Link> */}

            </div>
        )
    }
}

export default FindHero