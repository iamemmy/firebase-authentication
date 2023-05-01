import React, { useState } from 'react';
import { reload, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useAuthState } from 'react-firebase-hooks/auth';
import wallet from "../assets/acc-balance.png";
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {

    let navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const logoutUser = async () => {
        await signOut(auth);
        setTimeout(() => {
            navigate("/");
          }, 3000);
    }

  return (
    <div className='dashboard-wrapper'>

        <div className='welcome'>
            {user ? (
                <p>Welcome {user.email}</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>

        <div className='wallet-wrapper'>
            <div className='wallet'>
                <img src={wallet} />
                <div className='wallet-info'>
                    <p>Total Balance</p>
                    <p>$478.99</p>
                </div>
            </div>
            <div className='wallet'>
                <img src={wallet} />
                <div className='wallet-info'>
                    <p>Available Balance</p>
                    <p>$288.99</p>
                </div>
            </div>
        </div>

        <button onClick={logoutUser}>Sign Out</button>
    </div>
  )
}
