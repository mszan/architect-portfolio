import React from "react";
import {Landing} from "../Landing/Landing";
import About from "../About/About";
import LandingBgVideo from "../Landing/LandingBgVideo";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row"
import Col from "react-bootstrap/cjs/Col";
import NavBar from "../NavBar/NavBar";
import {Team} from "../Team/Team";
import {Footer} from "../Footer/Footer";
import {Contact} from "../Contact/Contact";
import LoadingOverlay from 'react-loading-overlay';
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";


class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("Base.jsx - componentDidMount")
            this.setState({isLoading: false})
        }, 500);
    }


    render() {
        return (
            <Container fluid className="overflow-hidden p-0">
                <Row>
                    {/*style={{position: "fixed"}}*/}
                    <Col>
                        <LoadingOverlay
                            active={this.state.isLoading}
                            styles={{
                                wrapper: {
                                    zIndex: "1050", //To cover Navbar.
                                    position: "fixed",
                                    width: "100vw",
                                    height: "100vh",
                                    visibility: this.state.isLoading ? "visible" : "hidden",
                                    transition: "visibility 1s",
                                },
                                overlay: (base) => ({
                                    ...base,
                                    background: '#292b30',
                                })
                            }}
                            spinner={<PropagateLoader
                                css={css`margin-left: 30px; margin-bottom: -30px;`}
                                color={"#FFFFFF"}
                            />}
                            text='Loading...'>
                        </LoadingOverlay>
                    </Col>
                </Row>
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
                <Row id="Contact">
                    <Col>
                        <Contact />
                    </Col>
                </Row>
                <Row id="Footer">
                    <Col>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Base;