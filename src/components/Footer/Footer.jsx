import React from 'react';
import classes from "./Footer.module.css"
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

const Footer = () => {
    return (
        <Row className={classes.Footer}>
            <Col>
                <Row className={classes.Footer__Social}>
                    <Col>
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook-f" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://twitter.com">
                            <i className="fab fa-twitter" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://linkedin.com">
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://youtube.com">
                            <i className="fab fa-youtube" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://instagram.com">
                            <i className="fab fa-instagram" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={`Hr ${classes.Footer__Hr}`}/>
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

export default Footer;