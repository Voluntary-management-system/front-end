import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './ForgotPassw.css';

//TODO make a request to the backend to checkng the password
//if success redirect to login page
// endpoint POST:/auth/reset

export const ResetPassword = () => {

    const history = useHistory();
    const [login, setLogin] = useState("");
    const [phone, setPhone] = useState("");
    const [newpassw, setNewpassw] = useState("");
    const [confirm, setConfirm] = useState("");


    const ResetPassword = (e) => {
        e.preventDefault();
        // if (true){
        //     history.push('/profile');
        // }
    }

    return (
        <div>
          <img className='img' src='/Images/Capture.jpg' alt=''/>
          <div className='r1'></div>
          <div className='r2'></div>
          <div className='r3'></div>
          <div className='r4'></div>
          <div className='r5'></div>
          <div className='r6'></div>
          <div className='div2'>
            <h2>Forgot Password?</h2>
            <form onSubmit >
                <input required type = "mail" id = 'input 1' placeholder = 'Username' value = {login} onChange = {(e) => {
                setLogin(e.target.value);
                } }/>
                <input required type = "New Password"  id = 'input 3' placeholder = 'New Password' value = {newpassw} onChange= {(e) => {
                setNewpassw(e.target.value);
                }}/>
                 <input required type = "Confirm"  id = 'input 4' placeholder = 'Confirm New Password' value = {confirm} onChange= {(e) => {
                setConfirm(e.target.value);
                }}/>
                <button className='button1' type = "submit">Continue</button>
            </form>
          </div>
        </div>
    )
}
