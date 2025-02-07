import React from "react";
import "./HomeVideo.scss"; // Import SCSS styles

const HomeVideo = ({ videoSrc }) => {
    return (
        <div className="home-video">
            <video
                className="video-bg"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
};

export default HomeVideo;
