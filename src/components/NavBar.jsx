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
            <Navbar expand="lg" fixed="top" className={classes.NavBarBg}>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;