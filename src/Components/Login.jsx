import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link, useNavigate } from 'react-router-dom';
import "../components.css";

export default function Login() {

    let navigate = useNavigate();

    const [errMessage, setErrMessage] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginUser = async () => {
        try {
          const user =  await signInWithEmailAndPassword(
           auth, loginEmail, loginPassword
          );
         //  console.log(user);
         navigate("/dashboard")
         } catch (error) {
           setErrMessage(error.message);
           setTimeout(() => {
           setErrMessage("");
            }, 3000);
         }
    }

  return (
    <div className='login-wrapper'>
        <div className='login'>
            <h3>Login</h3>
            <p>{errMessage}</p>
            <input type="text" placeholder='Enter email' onChange={(e) => {setLoginEmail(e.target.value)}} />
            <input type="password" placeholder='Enter password' onChange={(e) => {setLoginPassword(e.target.value)}} />
            <button onClick={loginUser}>Proceed</button>
            <Link to="/register">Create account</Link>
        </div>
    </div>
  )
}
