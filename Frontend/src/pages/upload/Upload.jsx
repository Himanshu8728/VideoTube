import React from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import '../pages.css';

const Upload = () => {
  return (
    <div className="upload-container">
      <h2>Upload Video</h2>
      <div className="upload-form">
        <Input label="Video Title" type="text" placeholder="Add a catchy title" />
        <Input label="Description" type="text" placeholder="Tell viewers about your video" />
        <Input label="Video File" type="file" accept="video/*" />
        <Input label="Thumbnail" type="file" accept="image/*" />
        <Button variant="primary" style={{marginTop: '20px'}}>Publish Video</Button>
      </div>
    </div>
  );
};
export default Upload;
