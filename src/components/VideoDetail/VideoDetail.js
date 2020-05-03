import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return '';
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe title="video player" src={videoUrl}></iframe>
      </div>
      <div className="ui segment">
        <h4 data-testid="detail-title">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
