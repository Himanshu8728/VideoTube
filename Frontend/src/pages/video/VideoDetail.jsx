import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import '../pages.css';

const VideoDetail = () => {
  const { id } = useParams();

  return (
    <div className="video-detail-container">
      <div className="player-wrapper">
         <div className="video-player">
           <p>Video Player Placeholder (ID: {id})</p>
         </div>
         <h1 className="video-title">Building a Full Stack App</h1>
         <div className="video-actions">
           <div className="owner-info">
             <img src="https://placehold.co/100" alt="Avatar" className="channel-avatar"/>
             <div>
               <h3>devDude</h3>
               <p>1.2k subscribers</p>
             </div>
             <Button variant="primary">Subscribe</Button>
           </div>
           <div className="interaction-buttons">
             <Button variant="secondary">Like</Button>
             <Button variant="secondary">Save</Button>
           </div>
         </div>
      </div>
      <div className="comments-wrapper">
         <h3>Comments</h3>
      </div>
    </div>
  );
};
export default VideoDetail;
