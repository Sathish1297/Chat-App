import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase'
import './navbar.scss'

export const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Chat-App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="pro_pic" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
