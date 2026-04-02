import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import './auth.css';
import api from '../../api/axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', fullName: '' });
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!avatar) {
      setError('Avatar is required');
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append('username', formData.username);
    data.append('email', formData.email);
    data.append('fullName', formData.fullName);
    data.append('password', formData.password);
    data.append('avatar', avatar);

    try {
      await api.post('/users/register', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container" style={{ margin: '40px 0' }}>
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Join VideoTube today</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="input-error" style={{marginBottom: '10px'}}>{error}</div>}
          <Input label="Full Name" name="fullName" type="text" placeholder="John Doe" value={formData.fullName} onChange={handleChange} required />
          <Input label="Username" name="username" type="text" placeholder="johndoe123" value={formData.username} onChange={handleChange} required />
          <Input label="Email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
          <Input label="Password" name="password" type="password" placeholder="Create a password" value={formData.password} onChange={handleChange} required minLength={8}/>
          <Input label="Avatar" name="avatar" type="file" accept="image/*" onChange={handleFileChange} required />
          <Button style={{ width: '100%', marginTop: '20px' }} type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>
        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
