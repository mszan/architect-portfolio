import React from "react";
import {Landing} from "../Landing/Landing";
import About from "../About/About";
import LandingBgVideo from "../Landing/LandingBgVideo";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row"
import Col from "react-bootstrap/cjs/Col";
import NavBar from "../NavBar/NavBar";
import {Team} from "../Team/Team";


class Base extends React.Component {
    render() {
        return (
            <Container fluid className="overflow-hidden p-0">
                <Row>
                    <Col>
                        <NavBar />
                    </Col>
                </Row>
                <Row id="Landing">
                    <Col>
                        <LandingBgVideo />
                        <Landing />
                    </Col>
                </Row>
                <Row id="About">
                    <Col>
                        <About />
                    </Col>
                </Row>
                <Row id="Team">
                    <Col>
                        <Team />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Base;