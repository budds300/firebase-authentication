import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';
import ResetPassword from './components/ResetPassword';
import SignInWithPhone from './components/SignInWithPhone';

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserAuthContextProvider>
    <Router>
      <Routes>
        <Route path="/" exact element= {<ProtectedRoutes> <Home /></ProtectedRoutes>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/phone" element={<SignInWithPhone />} />
      </Routes>

    </Router>
    
    </UserAuthContextProvider>
  )
}

export default App
