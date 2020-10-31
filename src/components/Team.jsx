import React from "react";
import classes from "./Team.module.css";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "./Card";

export class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    title: "John Doe",
                    desc_main: "Porta lorem mollis aliquam utmollis aliquam utmollis aliquam umollis aliquam utmollis aliquam utt porttitor leo a.",
                    img: process.env.PUBLIC_URL +  "/img/team/1.jpg",
                },
                {
                    id: 2,
                    title: "Andrew Doe",
                    desc_main: "Porta lorem mollis aliquam utmollis aliquam utmollismollis aliquam utmollis aliquam ut aliquam ut porttitor leo a.",
                    img: "/img/team/2.jpg",
                },
                {
                    id: 3,
                    title: "Jacob Doe",
                    desc_main: "Porta lorem mollis aliquam utmollis aliquam utmollis aliquammollis aliquam utmollis aliquam ut ut porttitor leo a.",
                    img: "/img/team/3.jpg",
                }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.TeamBg} style={{backgroundImage: `url(media/img/TeamBg.jpg`}}>{null}</div>
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
                            <Col sm={4} style={{ padding: 0}}>
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