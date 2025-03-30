import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice';
import {Loader2} from "lucide-react";
import {selectAuthError, selectAuthStatus} from "../selectors/authSelectors.jsx";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [adresse, setAdresse] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authStatus = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        try {
            await dispatch(registerUser({ username, email, password, adresse })).unwrap();
            navigate('/'); // Redirect to homepage after successful registration
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 my-8">
            <div className="w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Create an Account</h1>
                    <p className="mt-2 text-gray-500">Sign up below to create your account</p>
                </div>
                <div className="mt-5">

                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                value={username}
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="username"
                            />
                            <label
                                htmlFor="username"
                                className="pointer-events-none pb-5 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Username
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email}
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="email"
                            />
                            <label
                                htmlFor="email"
                                className="pointer-events-none pb-5 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Email Address
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="new-password"
                            />
                            <label
                                htmlFor="password"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Password
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="new-password"
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Confirm Password
                            </label>
                        </div>
                        <div className="relative mt-6">
                            <input
                                type="text"
                                name="adresse"
                                id="adresse"
                                placeholder="Address"
                                value={adresse}
                                onChange={(e) => setAdresse(e.target.value)}
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                autoComplete="street-address"
                            />
                            <label
                                htmlFor="adresse"
                                className="pointer-events-none pb-5 absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                            >
                                Address (optional)
                            </label>
                        </div>
                        <div className="my-6">
                            <button
                                type="submit"
                                disabled={authStatus === 'loading'}
                                className="w-full cursor-pointer rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none disabled:opacity-50"
                            >
                                  {authStatus === 'loading' ?  <Loader2 className='animate-spin mx-auto' />  : 'Sign Up'}
                            </button>
                        </div>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link
                                to={'/login'}
                                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                            >
                                Sign in
                            </Link>
                            .
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
