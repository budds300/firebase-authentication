import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoutes = ({children}) => {
    let {user} =useUserAuth();
    const navigate = useNavigate();
    if(!user){
        return navigate('/login')
    }
  return children
}

export default ProtectedRoutes
