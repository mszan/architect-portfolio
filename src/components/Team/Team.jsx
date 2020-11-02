import React from "react";
import classes from "./Team.module.css";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "../Card/Card";

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    title: "John Doe",
                    labels: [
                        "CEO",
                        "Chief Executive Officer",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam utmollis aliquam utmollismollis aliquam utmollis aliquam ut aliquam ut porttitor leo a.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/Team/Member1.jpg",
                },
                {
                    id: 2,
                    title: "Andrew Doe",
                    labels: [
                        "CTO",
                        "Chief Technology Officer",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam utmollis aliquam utmollismollis aliquam utmollis aliquam ut aliquam ut porttitor leo a.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/Team/Member2.jpg",
                },
                {
                    id: 3,
                    title: "Jacob Doe",
                    labels: [
                        "CFO",
                        "Chief Financial Officer",
                    ],
                    descriptions: [
                        "Porta lorem mollis aliquam utmollis aliquam utmollismollis aliquam utmollis aliquam ut aliquam ut porttitor leo a.",
                        "Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.Porta lorem mollis aliquam ut porttitor leo a. Non blandit massa enim nec dui nunc mattis enim ut. Fermentum et sollicitudin ac orci. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Elementum facilisis leo vel fringilla est ullamcorper eget.",
                    ],
                    img: process.env.PUBLIC_URL +  "/img/Team/Member3.jpg",
                }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <Col className={classes.Team}>
                    <Row>
                        <Col className="d-flex justify-content-center mb-3">
                            <h1 className={classes.Team__Header}>TEAM</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex mb-3">
                            <p className={classes.Team__Desc}>Sagittis id consectetur purus ut faucibus pulvinar elementum. Bibendum ut tristique et egestas quis ipsum. Risus in hendrerit gravida rutrum quisque non. Ullamcorper malesuada proin libero nunc consequat interdum varius. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.</p>
                        </Col>
                    </Row>
                    <Row style={{ padding: 15}}>
                        {this.state.cards.map(card =>
                            <Col key={card.id} sm={4} style={{ padding: 0}}>
                                <Card
                                    key={card.id}
                                    card={card} />
                            </Col>
                        )}
                    </Row>
                </Col>
            </React.Fragment>

        );
    }
}

export default Team;