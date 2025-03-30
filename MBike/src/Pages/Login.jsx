import React, { useState, useEffect } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { fetchUsers } from '../Features/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmins } from '../Features/Slice';
const FormLogin = () => {


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
    dispatch(fetchAdmins())

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
    <section>
      <div className="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center" />
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?
            <Link to='/FormRegister' style={{ color: '#667eea', textDecoration: 'none' }}>
            Create a free account
            </Link>
          </p>
          <form onSubmit={HandleSubmit} className="mt-8" method="POST" action="#">
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input onChange={(e)=>{setExisting({...existing , email : e.target.value})}}
                   placeholder="Email" type="email" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
        
                </div>
                <div className="mt-2">
                  <input onChange={(e)=>{setExisting({...existing , pass : e.target.value})}}
                    placeholder="Password" type="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </div>
              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" type="submit">
                  Get started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormLogin;
