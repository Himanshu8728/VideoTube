import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import './auth.css';
import api from '../../api/axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await api.post('/users/login', formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to continue to VideoTube</p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="input-error" style={{marginBottom: '10px'}}>{error}</div>}
          <Input 
            label="Email or Username" 
            name="email" 
            type="text" 
            placeholder="you@example.com" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <Input 
            label="Password" 
            name="password" 
            type="password" 
            placeholder="Enter password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <Button style={{ width: '100%', marginTop: '10px' }} type="submit" disabled={loading}>
             {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <div className="auth-footer">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
