import React, { useState, useEffect } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { fetchUsers } from "./Slice";
import { useDispatch, useSelector } from 'react-redux';
import { readAdmin } from './Slice';

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [existing , setExisting] = useState({
      email:'',
      pass :''
  })
  const {loading,users,error} = useSelector((state) => state.users)
  const admins = useSelector((state) => state.users.admins);
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(readAdmin())
  
}, []);

  function HandleSubmit(event){
    event.preventDefault()
    const user = users.find((u) => u.email === existing.email);
    const admin = admins.find((u) => u.email === existing.email);

    if (admin && admin.password === existing.pass) {
      console.log('Welcome admin');
      navigate('/Admin');
    } else if (user && user.password === existing.pass) {
      console.log('Hi user');
      navigate(`/Home_User/${user.id}`);
    } else {
      alert('Invalid email or password');
    }
  }
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '15px',
          overflow: 'hidden',
          animation: 'fadeIn 0.5s ease-in-out',
        }}
      >
        <div className="card-body p-5">
          <h2 className="card-title text-center mb-4" style={{ color: '#333' }}>
            Welcome Back
          </h2>
          <p className="text-center mb-4" style={{ color: '#666' }}>
            Sign in to your account
          </p>
          <form onSubmit={HandleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{ color: '#333' }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                style={{ borderRadius: '10px' }}
                onChange={(e)=>{setExisting({...existing , email : e.target.value})}}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label" style={{ color: '#333' }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                style={{ borderRadius: '10px' }}
                onChange={(e)=>{setExisting({...existing , pass : e.target.value})}}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                padding: '10px',
                fontSize: '16px',
              }}
            >
              Sign In
            </button>
          </form>
          <div className="text-center mt-4">
            <p style={{ color: '#666' }}>
              Don't have an account?{' '}
              <Link to='/Register' style={{ color: '#667eea', textDecoration: 'none' }}>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Add some CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  )
}
