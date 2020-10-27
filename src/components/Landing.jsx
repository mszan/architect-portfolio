import React from 'react';
import classes from './Landing.module.css'
import Button from "react-bootstrap/cjs/Button";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

export const Landing = () => {
    return (
        <Row className={classes.Landing}>
            <Col>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className={classes.Landing__Header}>
                            <h1>Welcome</h1>
                        </div>
                        <Button className={classes.Landing__Button}><i className="fas fa-arrow-down"/></Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};