import React from 'react';

export function YouTubeVideo(props) {
    return (
        <iframe className="yt-video"
                src={`https://www.youtube.com/embed/${props.videoId}`}
                frameBorder="0"
                allowFullScreen></iframe>
    );

}