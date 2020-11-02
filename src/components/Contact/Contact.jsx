import React from 'react';
import classes from "./Contact.module.css"
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Form from "react-bootstrap/cjs/Form";
import Button from "react-bootstrap/cjs/Button";

const Contact = () => {
    return (
        <Row className={`${classes.Contact}`}>
            <Col className="d-flex justify-content-center">
                <Form className={classes.Contact__Form}>
                    <h1 className={classes.Contact__Form__Header}>CONTACT</h1>
                    <div className="Hr"/>
                    <Form.Group controlId="ContactName">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="ContactEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="ContactMessage">
                        <Form.Control
                            rows={4}
                            as="textarea"
                            placeholder="Message" />
                    </Form.Group>

                    <Form.Group controlId="ContactNewsletter">
                        <label className="CheckBox">
                            <input type="checkbox" />
                            <i className="Checkmark fas fa-check" />
                            <span className={classes.Contact__Form__Checkbox__Label}>Sign to our newsletter</span>
                        </label>
                    </Form.Group>

                    <Button className={classes.Contact__Form__Btn} variant="light" type="submit">Send</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default Contact;