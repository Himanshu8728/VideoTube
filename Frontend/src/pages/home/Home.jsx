import React, { useState, useEffect } from 'react';
import VideoCard from '../../components/ui/VideoCard';
import '../pages.css';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([
      { _id: '1', title: 'Building a Full Stack App', views: 1204, thumbnail: '', owner: { username: 'devDude', avatar: '' } },
      { _id: '2', title: 'React Hooks Explained', views: 5032, thumbnail: '', owner: { username: 'reactNinja', avatar: '' } },
      { _id: '3', title: 'Vite vs Webpack', views: 880, thumbnail: '', owner: { username: 'techLead', avatar: '' } },
      { _id: '4', title: 'Modern UI Design', views: 33400, thumbnail: '', owner: { username: 'designPro', avatar: '' } },
    ]);
  }, []);

  return (
    <div className="home-container">
      <h2 className="page-title">Recommended</h2>
      <div className="video-grid">
        {videos.map(v => <VideoCard key={v._id} video={v} />)}
      </div>
    </div>
  );
};
export default Home;
