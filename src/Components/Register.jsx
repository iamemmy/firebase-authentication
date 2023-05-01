import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {

    let navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user] = useAuthState(auth);

    const registerUser = async () => {
        try {
         const user =  await createUserWithEmailAndPassword(
          auth, registerEmail, registerPassword
         );
        //  console.log(user);
        navigate("/dashboard")
        } catch (error) {
          console.log(error.message);
        }

        // console.log(auth.currentUser.email);
    }

  return (
    <div className='register-wrapper'>
        <div className='register'>
            <h3>Register User</h3>
            {user ? <p>Success</p> : <p>Not Authenticated</p>}
            
            <input type="text" placeholder='Enter email' onChange={(e) => {setRegisterEmail(e.target.value)}} />
            <input type="password" placeholder='Enter password' onChange={(e) => {setRegisterPassword(e.target.value)}} />
            <button onClick={registerUser}>Create User</button>
            <Link to="/">Have account? Login</Link>
            </div>
    </div>
  )
}
