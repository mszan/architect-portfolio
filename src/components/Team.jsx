import React from "react";
import classes from "./Team.module.css";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

export class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.TeamBg} style={{backgroundImage: `url(media/img/TeamBg.jpeg`}}>{null}</div>
                <div className={classes.Team}>
                    <Row>
                        <Col className="d-flex justify-content-center mb-3">
                            <h1 className={classes.Team__Header}>Team section</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex mb-3">
                            <p className={classes.Team__Desc}>Sagittis id consectetur purus ut faucibus pulvinar elementum. Bibendum ut tristique et egestas quis ipsum. Risus in hendrerit gravida rutrum quisque non. Ullamcorper malesuada proin libero nunc consequat interdum varius. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl.</p>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}