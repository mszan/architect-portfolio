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
                        <div className={classes.Landing__Face}>
                            <h1 className={classes.Landing__Face__Header}>Welcome</h1>
                            <span className={classes.Landing__Face__Desc}>Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Massa massa ultricies mi quis hendrerit dolor magna. Nascetur ridiculus mus mauris vitae. Tellus mauris a diam maecenas sed. Laoreet suspendisse interdum consectetur libero id.</span>
                        </div>
                        <Button className={classes.Landing__Button}><i className="fas fa-arrow-down"/></Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};