import React from "react";
import classes from './LandingBgVideo.module.css'

class LandingBgVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };

        this.videoIsLoaded = this.videoIsLoaded.bind(this)
    }

    videoIsLoaded() {
        this.setState({isLoading: true})
        let thumbnailEl = document.getElementById("LandingBgVideoThumbnail")
        thumbnailEl.style.opacity = "0";

        let videoEl = document.getElementById("LandingBgVideo")
        videoEl.style.opacity = ".5";
    }

    render() {
        const isLoading = this.state.isLoading

        return (
            <React.Fragment>
                {isLoading && <img
                    className={classes.LandingBgVideoThumbnail}
                    id="LandingBgVideoThumbnail"
                    src={process.env.PUBLIC_URL + "/img/Landing/LandingBgVideoThumbnail.jpg"}
                    alt="LandingBgVideoThumbnail"/>}
                <video
                    className={classes.LandingBgVideo}
                    id="LandingBgVideo"
                    autoPlay
                    muted
                    loop
                    playsInline="true"
                    disablePictureInPicture="true"
                    onLoadedData={this.videoIsLoaded}>
                    <source src={process.env.PUBLIC_URL + "/video/Landing/bg.mp4"} type="video/mp4"/>
                </video>
            </React.Fragment>
        );
    }
}
export default LandingBgVideo;