import React from 'react';
import classes from "./Card.module.css"
// import Modal from 'react-modal';


class Card extends React.Component {
    constructor(props) {
        // Modal.setAppElement('#yourAppElement')
        super(props);
        this.state = {};
    }

    // getModal() {
    //     return (
    //         <Modal
    //             isOpen={modalIsOpen}
    //             onAfterOpen={afterOpenModal}
    //             onRequestClose={closeModal}
    //             style={customStyles}
    //             contentLabel="Example Modal">
    //
    //             <h2>Hello</h2>
    //         </Modal>
    //     );
    // }

    render() {
        return (<div className={classes.Card}>
            <div className={classes.Card__Img} style={{backgroundImage: `url(${this.props.card.img})`}}>{null}</div>
            <div className={classes.Card__Inner}>
                <h4 className={classes.Card__Inner__Title}>{this.props.card.title}</h4>
                <span className={classes.Card__Inner__DescMain}>{this.props.card.desc_main}</span><br />
                {/*<a href="#"><Button className={classes.Card__Inner__Btn} variant="light">Read more</Button></a>*/}
                <h6 className={classes.Card__Inner__ReadMore}>See details</h6>
            </div>
        </div>
    );
    }
    }

    Card.propTypes = {};

    export default Card;
