import React from "react";
import classes from './BgVideo.module.css'

class BgVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <video className={classes.BgVideo} autoPlay muted loop>
                <source src="media/video/bg1.mp4" type="video/mp4"/>
            </video>
        );
    }
}

BgVideo.propTypes = {};
export default BgVideo;