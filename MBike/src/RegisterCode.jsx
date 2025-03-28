import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { postData } from './Slice'
export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data,setData] = useState({
    name : '',
    email : '',
    password : ''
  })
  const {loading,users,error} = useSelector((state)=>state.users)

  function HandleSubmit(e){
      e.preventDefault()
      const user = users.find((u)=>u.email === data.email)
      if(user){
        alert('Email already Exist')
      }
      else{
        dispatch(postData(data))
        navigate('/')
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
            Create an Account
          </h2>
          <p className="text-center mb-4" style={{ color: '#666' }}>
            Join us to get started
          </p>
          <form onSubmit={HandleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: '#333' }}>
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                style={{ borderRadius: '10px' }}
                onChange={(e)=>{setData({...data, name : e.target.value})}}
              />
            </div>
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
                onChange={(e)=>{setData({...data, email : e.target.value})}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ color: '#333' }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label" style={{ color: '#333' }}>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                style={{ borderRadius: '10px' }}
                onChange={(e)=>{setData({...data, password : e.target.value})}}
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
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <p style={{ color: '#666' }}>
              Already have an account?{' '}
              <Link href="#" style={{ color: '#667eea', textDecoration: 'none' }}>
                Sign In
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
