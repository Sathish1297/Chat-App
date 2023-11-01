import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

export const Login = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const email = e.target[0].value; 
    const password = e.target[1].value; 

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    }
    catch(err){
      setError(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Chat-App</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}> 
              <input type="email" placeholder='email' className="email" />
              <input type="password" placeholder='password' className="password" />
              <button>Sign in</button>
              {error && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link> </p>
        </div>
    </div>
  )
}
