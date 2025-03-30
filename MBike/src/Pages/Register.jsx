import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { postUser } from '../Features/Slice'
const FormRegister = () => {


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
        dispatch(postUser(data))
        navigate('/')
      }
  }




    return (
    <div className>
        <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-3">
            <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2" />
            <h2 className="text-2xl font-bold leading-tight">
                Sign up to create account
            </h2>
            <p className="mt-2 text-base text-gray-600">
            Already have an account?
                <Link href="#" style={{ color: '#667eea', textDecoration: 'none' }}>
                            Sign In
                </Link>
            </p>
            <form onSubmit={HandleSubmit} className="mt-5">
                <div className="space-y-4">
                <div>
                    <label className="text-base font-medium text-gray-900">
                    User Name
                    </label>
                    <div className="mt-2">
                    <input onChange={(e)=>{setData({...data, name : e.target.value})}}
                        placeholder="Full Name" type="text" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="user_name" />
                    </div>
                </div>
                <div>
                    <label className="text-base font-medium text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input onChange={(e)=>{setData({...data, email : e.target.value})}}
                    placeholder="Email" type="email" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="email" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                        Password
                    </label>
                    </div>
                    <div className="mt-2">
                    <input placeholder="Password" type="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="password" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                    Confirm Password
                    </label>
                    </div>
                    <div className="mt-2">
                    <input onChange={(e)=>{setData({...data, password : e.target.value})}}
                    placeholder="Password" type="password" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name="password" />
                    </div>
                </div>


                <div>
                    <button className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80" type="button">
                    Create Account
                    </button>
                </div>
                </div>
            </form>
        </div>
        </div>
    </section>
    </div>
);
}

export default FormRegister;
