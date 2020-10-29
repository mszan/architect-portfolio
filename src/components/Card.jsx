import React from 'react';

import classes from "./Card.module.css"

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={classes.Card}>
                <div className={classes.Card__Overlay}>
                    <a href={this.props.card.modal_link}>
                        <div className={classes.Card__Overlay__Head}>
                            <p>{this.props.card.title}</p>
                            <hr className={classes.Card__Overlay__Head__Hr} />
                        </div>
                        <div className={classes.Card__Overlay__Desc}>
                            <p>{this.props.card.desc_main}</p>
                        </div>
                        <div className={classes.Card__Overlay__RMore}>
                            <p>Click to see details</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

Card.propTypes = {};

export default Card;
