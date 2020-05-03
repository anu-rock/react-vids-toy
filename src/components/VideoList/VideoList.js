import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideoList.css';

const VideoList = ({ videos, onVideoSelected }) => {
  return (
    <div className="video-list ui relaxed divided list">
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          video={video}
          onVideoSelected={onVideoSelected}
        />
      ))}
    </div>
  );
};

export default VideoList;
