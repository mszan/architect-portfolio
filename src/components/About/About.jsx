import React from 'react';
import classes from './About.module.css'

import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/cjs/Row";

import Card from "../Card/Card";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    title: "Project #1",
                    labels: [
                        "Short label",
                        "Long label",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis eget.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/About/Project1.jpg",
                },
                {
                    id: 2,
                    title: "Project #2",
                    labels: [
                        "Short label",
                        "Long label",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis eget.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/About/Project2.jpg",
                },
                {
                    id: 3,
                    title: "Project #3",
                    labels: [
                        "Short label",
                        "Long label",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis eget.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/About/Project3.jpg",
                },
                {
                    id: 4,
                    title: "Project #4",
                    labels: [
                        "Short label",
                        "Long label",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis eget.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/About/Project4.jpg",
                },
                {
                    id: 5,
                    title: "Project #5",
                    labels: [
                        "Short label",
                        "Long label",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis eget.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/About/Project5.jpg",
                },
                {
                    id: 6,
                    title: "Project #6",
                    labels: [
                        "Short label",
                        "Long label",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis eget.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/About/Project6.jpg",
                },
            ]
        };
    }

    render() {
        return (
            <div className={classes.About}>
                <Row>
                    <Col className="d-flex justify-content-center mb-3">
                        <h1 className={classes.About__Header}>ABOUT</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex mb-3">
                        <p className={classes.About__Desc}>Sagittis id consectetur purus ut faucibus pulvinar elementum. Bibendum ut tristique et egestas quis ipsum. Risus in hendrerit gravida rutrum quisque non. Ullamcorper malesuada proin libero nunc consequat interdum varius. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.</p>
                    </Col>
                </Row>
                <Row style={{ padding: 15}}>
                    {this.state.cards.map(card =>
                        <Col key={card.id} sm={6} md={4} style={{ padding: 0}}>
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

export default About;