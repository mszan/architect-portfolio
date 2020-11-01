import React from 'react';
import classes from "./Contact.module.css"
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/cjs/Button";

export const Contact = () => {
    return (
        <Row className={`${classes.Contact}`}>
            <Col className="d-flex justify-content-center">
                <Form className={classes.Contact__Form}>
                    <h1 className={classes.Contact__Form__Header}>CONTACT US</h1>
                    <div className={"Hr"}/>
                    <Form.Group controlId="ContactName">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="ContactEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="ContactMessage">
                        <Form.Control type="text" placeholder="Message" />
                    </Form.Group>
                    <Form.Group controlId="ContactNewsletter">
                        <Form.Check className={classes.Contact__Form__Checkbox}
                                    type="checkbox"
                                    label="Sign to our newsletter"/>
                    </Form.Group>
                    <Button className={classes.Contact__Form__Btn} variant="light" type="submit">
                        Send
                    </Button>
                    {/*<input placeholder={"Yo"} className={classes.Contact__Form__Input}/>*/}
                    {/*<input/>*/}
                </Form>
            </Col>
        </Row>
    );
};