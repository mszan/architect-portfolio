import React from "react";
import classes from './BgVideo.module.css'

// const videoEl = document.getElementById("BgVideo");
// console.log(videoEl)

class BgVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };

        this.videoIsLoaded = this.videoIsLoaded.bind(this)
    }

    videoIsLoaded() {
        this.setState({isLoading: true})
        let thumbnailEl = document.getElementById("BgVideoThumbnail")
        thumbnailEl.style.opacity = "0";

        let videoEl = document.getElementById("BgVideo")
        videoEl.style.opacity = ".5";
    }

    render() {
        const isLoading = this.state.isLoading

        return (
            <React.Fragment>
                {isLoading && <img
                    className={classes.BgVideoThumbnail}
                    id="BgVideoThumbnail"
                    src="media/img/VideoThumbnail.jpg"
                    alt="VideoThumbnail"/>}

                <video
                    className={classes.BgVideo}
                    id="BgVideo"
                    autoPlay
                    muted
                    loop
                    onLoadedData={this.videoIsLoaded}>
                    <source src="media/video/bg1.mp4" type="video/mp4"/>
                </video>
            </React.Fragment>
        );
    }
}

BgVideo.propTypes = {};
export default BgVideo;