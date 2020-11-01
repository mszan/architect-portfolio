import React from 'react';
import classes from "./Footer.module.css"
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

export const Footer = () => {
    return (
        <Row className={classes.Footer}>
            <Col>
                <Row className={classes.Footer__Social}>
                    <Col>
                        <i className="fab fa-facebook-f" />
                    </Col>
                    <Col>
                        <i className="fab fa-twitter" />
                    </Col>
                    <Col>
                        <i className="fab fa-linkedin-in" />
                    </Col>
                    <Col>
                        <i className="fab fa-youtube" />
                    </Col>
                    <Col>
                        <i className="fab fa-instagram" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={"Hr"}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href={"https://github.com/mszan"} className={classes.Footer__Copyright__Link}>
                            <h6 className={classes.Footer__Copyright__Txt}>Copyright &copy; 2020 Dawid Mszanowski</h6>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};