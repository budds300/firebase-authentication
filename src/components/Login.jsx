// Login.js
import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import { GoogleLogin } from 'react-google-login';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {logIn,googleSignIn} = useUserAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate()

   

  const handleLogin = async (e)  => {
    e.preventDefault();
    // Perform login logic (e.g., API call, authentication)
    console.log('Login button clicked with:', { email, password });
  
    setError("")
    
    // Validate passwords match
   
    try{
      await logIn(email,password)
      navigate('/')
    }
    catch(err){
      setError(err.message)
    }

    // Perform signup logic (e.g., API call, user creation)
    console.log('Sign Up button clicked with:', { email, password });
  };
  const handleGoogleSignIn= async (e)=>{
    // e.preventDefault();
    try {
        await googleSignIn();
        navigate('/')
        
    } catch (error) {
      if (error.code === 'auth/cancelled-popup-request') {
        // Handle the cancellation or provide feedback to the user
        console.log('Popup request was cancelled by the user.');
      } else {
        console.error('Error signing in with Google:', error);
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
    {error && (
        <span className="block mt-2 text-red-500 text-sm">
          <svg
            className="inline-block w-4 h-4 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v2h-2zm0-12h2v8h-2z" />
          </svg>
          {error}
        </span>
      )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Sign In with Google"
        onSuccess={handleGoogleSignIn}
        onFailure={handleGoogleSignIn}
        cookiePolicy={'single_host_origin'}
       
      />
        <div className="mb-6">
       
      </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogin}
          >
            Sign In
          </button>
          <span className="text-sm">
         Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Log in here
          </Link>
        </span>
        </div>
        
       
      </form>
    </div>
  );
};

export default Login;
