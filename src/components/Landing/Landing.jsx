import React from 'react';
import classes from './Landing.module.css'
import Button from "react-bootstrap/cjs/Button";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Typewriter from 'typewriter-effect';

export const Landing = () => {
    return (
        <Row className={classes.Landing}>
            <Col>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div className={classes.Landing__Face}>
                            <Typewriter
                                options={{
                                    strings: ['Bears eat beets', 'Bears, Beets, Battlestar Galactica'],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: classes.Landing__Face__Header,
                                    cursorClassName: classes.Landing__Face__Cursor
                                }} />
                            <span className={classes.Landing__Face__Desc}>Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Massa massa ultricies mi quis hendrerit dolor magna. Nascetur ridiculus mus mauris vitae. Tellus mauris a diam maecenas sed. Laoreet suspendisse interdum consectetur libero id.</span>
                        </div>
                        <Button href="#About" className={classes.Landing__Btn}>Learn more</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};