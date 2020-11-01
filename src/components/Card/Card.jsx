import React from 'react';
import classes from "./Card.module.css"
import Modal from 'react-modal';
import Button from "react-bootstrap/cjs/Button";
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.Card}>

                    <div className={classes.Card__Img} style={{backgroundImage: `url(${this.props.card.img})`}}>{null}</div>
                    <div className={classes.Card__Inner}>
                        <h4 className={classes.Card__Inner__Title}>{this.props.card.title}</h4>
                        <h6>{this.props.card.labels[0]}</h6>
                        <span className={classes.Card__Inner__DescMain}>{this.props.card.descriptions[0]}</span><br />
                        <Button variant="light" onClick={this.handleOpenModal} className={classes.Card__Inner__Btn}>See details</Button>
                    </div>
                </div>
                <Modal
                    closeTimeoutMS={300}
                    className={classes.Card__Modal__Content}
                    overlayClassName={classes.Card__Modal__Overlay}
                    isOpen={this.state.showModal}
                    contentLabel="Modal #1 Global Style Override Example"
                    onRequestClose={this.handleCloseModal}>
                    <h2>{this.props.card.title}</h2>
                    <h6>{this.props.card.labels[1]}</h6>
                    <div className="Hr"/>
                    <div className={classes.Card__Modal__Content__Description}>
                        <p>{this.props.card.descriptions[1]}</p>
                    </div>
                    <Button className={classes.Card__Modal__Content__Btn} variant="dark" onClick={this.handleCloseModal}>Close</Button>
                </Modal>
            </React.Fragment>
        );
    }
}

Card.propTypes = {};

export default Card;
