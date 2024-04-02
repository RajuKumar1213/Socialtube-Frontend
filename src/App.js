import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';

export default function App() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Register/>} />
        <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route exact path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
        <Route exact path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}
