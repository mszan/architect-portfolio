import React from "react";
import {Landing} from "./Landing";
import About from "./About";
import BgVideo from "./BgVideo";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row"
import Col from "react-bootstrap/cjs/Col";
import NavBar from "./NavBar";


class Base extends React.Component {
    render() {
        return (
            <Container fluid className="p-0">
                <Row>
                    <NavBar />
                </Row>
                <Row>
                    <Col>
                        <BgVideo />
                        <Landing />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <About />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Base;