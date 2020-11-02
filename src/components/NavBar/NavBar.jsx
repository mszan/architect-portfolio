import React from 'react';
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import classes from "./NavBar.module.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleNavBarBg);
    }

    handleNavBarBg = () => {
        let navEl = document.querySelector("nav")

        if (window.scrollY > window.innerHeight - 50) {
            navEl.style.cssText = 'background-color: white!important; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .5);';
        } else {
            navEl.style.cssText = 'background-color: transparent!important;';
        }
    }

    render() {
        return (
            <Navbar variant="light" expand="lg" fixed="top" className={classes.NavBar}>
                <Navbar.Brand href="#Landing">COMPANY NAME</Navbar.Brand>
                <Navbar.Toggle className={classes.NavBar__Hamburger} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Team">Team</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;