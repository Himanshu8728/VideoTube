import React from 'react';
import { Link } from 'react-router-dom';
import './ui.css';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video._id}`} className="video-card-link">
      <div className="video-card">
        <div className="thumbnail-container">
          <img src={video.thumbnail || "https://placehold.co/600x400/2a2a2f/fff?text=Video"} alt={video.title} />
        </div>
        <div className="video-info">
          <img src={video.owner?.avatar || "https://placehold.co/100x100"} alt="avatar" className="channel-avatar" />
          <div className="details">
            <h3 className="title">{video.title}</h3>
            <p className="channel-name">{video.owner?.username}</p>
            <p className="views-date">{video.views} views</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
