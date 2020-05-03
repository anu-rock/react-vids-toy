import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onVideoSelected }) => {
  return (
    <div className="video-card item" onClick={() => onVideoSelected(video)}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
        data-testid="card-thumbnail"
      />
      <div className="content">
        <h4 className="header" data-testid="card-title">
          {video.snippet.title}
        </h4>
      </div>
    </div>
  );
};

export default VideoCard;
