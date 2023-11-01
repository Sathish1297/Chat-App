import './register.scss'
import add from '../../image/add.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase.js";
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName = e.target[0].value; 
    const email = e.target[1].value; 
    const password = e.target[2].value; 
    const file = e.target[3].files[0]; 

    try{
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL
              });

              await setDoc(doc(db, "users", res.user.uid),{
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL
              });

              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            }
            catch (err) {
              setError(true);
              setLoading(false);
            }
          });
        }
      );
    }
    catch(err){
      setError(true);
      setLoading(false);
    }
  }

  return (    
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Chat-App</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit} method="post"> 
              <input type="text" placeholder='display name' className="displayName" />
              <input type="email" placeholder='email' className="email" />
              <input type="password" placeholder='password' className="password" />
              <input type="file" name="file" id="file" style={{ display:"none" }} />
              <label htmlFor="file">
                <img src={add} alt="" />
                <span>Add an avatar</span>
              </label>
              <button disabled={loading} >Sign up</button>
              {loading && "Uploading and compressing the image please wait..."}
              {error && <span>Something went wrong</span>}
            </form>
            <p>You do have an account? <Link to="/login">Login</Link> </p>
        </div>
    </div>
  )
}
