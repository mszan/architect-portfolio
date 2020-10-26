import React from 'react';
import classes from './Landing.module.css'
import Button from "react-bootstrap/cjs/Button";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

export const Landing = () => {
    return (
        <Row className={classes.Landing}>
            <Col>
                <Row className="justify-content-center">
                    <Button className={classes.Landing__Button}><i className="fas fa-arrow-down"/></Button>
                </Row>
            </Col>
        </Row>
    );
};