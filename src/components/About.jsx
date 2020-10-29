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
                {
                    id: 1,
                    title: "Project #1",
                    desc_main: "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    img: "img/cards/1.jpg",
                },
                {
                    id: 2,
                    title: "Project #2",
                    desc_main: "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    img: "img/cards/2.jpg",
                },
                {
                    id: 3,
                    title: "Project #3",
                    desc_main: "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    img: "img/cards/3.jpg",
                },
            ]
        };
    }

    render() {
        return (
            <div className={classes.About}>
                <Row>
                    <Col className="d-flex justify-content-center mb-3">
                        <h1 className={classes.About__Header}>About section</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex mb-3">
                        <p className={classes.About__Desc}>Sagittis id consectetur purus ut faucibus pulvinar elementum. Bibendum ut tristique et egestas quis ipsum. Risus in hendrerit gravida rutrum quisque non. Ullamcorper malesuada proin libero nunc consequat interdum varius. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.</p>
                    </Col>
                </Row>
                <Row>
                    {this.state.cards.map(card =>
                        <Col md={4}>
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