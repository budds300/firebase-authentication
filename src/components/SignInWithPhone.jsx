import React, { useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'
const SignInWithPhone = () => {
    const [phoneNumber, setPhoneNumber]=useState('')
    const [message, setMessage]=useState('')
    const [error, setError]=useState('')
    const [otp, setOtp]=useState('')
    const [result, setResult]=useState('')
    const {setUpRecaptha} =useUserAuth()
    const navigate = useNavigate()

    const handleSignIn= ()=>{

    }
    const getOtp = async (e) =>{
        e.preventDefault()
        console.log(phoneNumber);
        setError('')
        if (phoneNumber === "" || phoneNumber === undefined || phoneNumber.length>10){
            return setError("Please enter a valid number")

        }
        try {
            response = await setUpRecaptha(number) 
            setResult(response)
            setMessage('OTP Sent verified. Please wait');

            
        } catch (error) {
            setError(error.message)
            setMessage('')
        }

    }
    const handleVerifyOTP =async (e) =>{
        e.preventDefault()
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp)
            setMessage('OTP successfully verified. You are now signed in!');
        } catch (error) {
            setMessage('');
            setError(error.message)
        }
    }
  return (
    
    <div className="flex justify-center items-center h-screen">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
      <h2 className="text-2xl font-bold mb-4">Sign In with Phone Number</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={getOtp}
      >
        Send Verification Code
      </button>
      {message && <p className="mt-2 text-green-500">{message}</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}

      {/* Verification Code Form */}
      

      {/* OTP Form */}
    
        <div>
          <label className="block text-gray-700 text-sm font-bold mt-4" htmlFor="otp">
            OTP
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleVerifyOTP}
          >
            Verify OTP
          </button>
        </div>
      
    </form>
  </div>
  )
}

export default SignInWithPhone
