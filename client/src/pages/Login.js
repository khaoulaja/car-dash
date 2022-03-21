import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import gif from '../assets/images/cardriving.gif'



const Login = ()=>{
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, {error}] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try{
        const {data} = await login({
          variables: {...formState}
        });
        Auth.login(data.login.token)
      } catch (e){
        console.error(e);
      }
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
    return (
        <div className="min-h-screen md:flex bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="overflow-hidden md:flex w-1/2  i justify-around items-center hidden bg-offwhite">
            <img src={gif}/>
        </div>
        <div className="overflow-hidden m-auto flex md:w-1/2 justify-center  py-10 items-center">
            <form onSubmit={handleFormSubmit}
            className="bg-white md:w-96 w-80 p-6 rounded-lg drop-shadow-xl mt-20 md:mt-auto m-auto mx-4">
                <h1 className="text-gray-800 font-bold text-2xl mb-4">Welcome Back to Your Account!</h1>

                    {/* <div className="flex items-center border-2 py-2 px-3 rounded-full mb-4">
                        <svg className="h-5 w-5 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
                    </div> */}
                    <div className="flex items-center border-2 py-2 px-3 rounded-full mb-4">

                        <svg className="h-5 w-5 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                        <circle cx="12" cy="12" r="4" />  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></svg>
                        <input 
                        className="pl-2 outline-none border-none" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email Address"
                        value={formState.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-full">

                        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />  
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        <input 
                        className="pl-2 outline-none border-none" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        value={formState.password}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="h-6 p-2">
                        {error && <div className='text-rose-600'>Login failed!</div>}
                    </div>
                    <button type="submit" 
                    className="block w-full duration-1000 bg-indigo-600 hover:bg-sky-400 my-4 py-2 rounded-full text-white font-semibold mb-2">
                        Login</button>
                <div className="text-gray-600 my-4">Don't have an account? {' '}
                <a href="/signup" className="text-indigo-600 underline underline-offset-4 duration-500 hover:text-sky-400">Signup</a></div>
            </form>
            
        </div>
    </div>

    

)
}

export default Login;