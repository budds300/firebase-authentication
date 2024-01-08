// SignUpForm.js
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = useUserAuth();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const responseGoogle = (response) => {
    // Handle the Google Sign-In response
    console.log(response);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    // if (password !== confirmPassword) {
    //   console.error("Passwords do not match");
    //   return;
    // }
    setError("")
    try{
      await signUp (email,password)
      navigate('/login')
    }
    catch(err){
      setError(err.message)
    }

    // Perform signup logic (e.g., API call, user creation)
    console.log('Sign Up button clicked with:', { email, password });
  };

  return (
    
    <div className="flex justify-center items-center h-screen">
    
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        {/* Your signup form fields */}
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
        <div className="mb-6">
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
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Google Sign-In button */}
        <div className="mb-6">
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          <span className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </span>

        </div>
      </form>
    </div>
  );
};

export default SignUp;
