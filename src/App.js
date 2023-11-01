import './App.css';
import Home from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login' />
    }
    return children;
  }
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
          <Route path="login" index element={<Login/>} /> 
          <Route path="register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
