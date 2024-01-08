import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { user,logOut } = useUserAuth();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    // Implement your logout logic here
    console.log('Logout clicked');
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Hello {user && user.email}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Home
