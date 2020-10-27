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
                <div className={classes.overlay}>
                    <div className={classes.head}>
                        <p>{this.props.card.desc}</p>
                        <hr />
                    </div>
                    <div className={classes.price}>
                        <p className="old">$699</p>
                        <p className="new">$345</p>
                    </div>
                    <div className={classes.cart}>
                        <span>ADD TO CART</span>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {};

export default Card;
