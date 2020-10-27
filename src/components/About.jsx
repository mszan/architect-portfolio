import React from 'react';
import classes from './About.module.css'

import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";

import Card from "./Card";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {id: 1, desc: "1desc"},
                {id: 2, desc: "2desc"},
                {id: 3, desc: "3desc"},
            ]
        };
    }

    render() {
        return (
            <div className={classes.About}>
                <Row>
                    <Col className="d-flex justify-content-center mb-3">
                        <h1>About section</h1>
                    </Col>
                </Row>
                <Row>
                    {this.state.cards.map(card =>
                        <Col xs={4}>
                            <Card
                                key={card.id}
                                card={card} />
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}

About.propTypes = {};

export default About;