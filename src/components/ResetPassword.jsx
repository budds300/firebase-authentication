import React, { useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext';

const ResetPassword = () => {
    const [error ,setError]= useState('');
    const {restPassword}=useUserAuth();
    const [message, setMessage]= useState('')
    const [email, setEmail]=useState('')
    


    const handleResetPassword = async(e)=>{
        e.preventDefault()
        try {
            await restPassword(email)
        setMessage("Password reset email sent. Check your inbox.");
        setError('')
        } catch (error) {
            setMessage('')
            setError(error.message)
        }
        

    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        {message && (
          <div className="mb-4 text-green-600">
            <p>{message}</p>
          </div>
        )}
        {error && (
          <div className="mb-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
