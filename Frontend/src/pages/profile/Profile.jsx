import React from 'react';
import VideoCard from '../../components/ui/VideoCard';
import Button from '../../components/ui/Button';
import '../pages.css';

const Profile = () => {
  return (
    <div className="profile-container" style={{ width: '100%' }}>
      <div className="profile-header" style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
         <img src="https://placehold.co/150" alt="Avatar" style={{ borderRadius: '50%', width: '120px', height: '120px' }}/>
         <div>
           <h1 style={{ margin: 0 }}>John Doe</h1>
           <p style={{ color: 'var(--text-secondary)' }}>@johndoe123 • 250 subscribers</p>
           <Button variant="primary" style={{ marginTop: '10px' }}>Customize Channel</Button>
         </div>
      </div>
      <h2 className="page-title">Uploaded Videos</h2>
      <div className="video-grid">
         <p style={{ color: 'var(--text-secondary)' }}>No completed videos yet.</p>
      </div>
    </div>
  );
};
export default Profile;
