import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../../assets/assets';

const LoginPopup = ({ showLogin, setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");

    const toggleState = () => {
        setCurrentState(prevState => prevState === "Login" ? "Sign Up" : "Login");
    };

    return (
        <div className={showLogin ? 'login-popup' : 'login-popup hidden'}>
            <div className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-input">
                    {currentState === "Sign Up" && <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
                
                
            </div>
        </div>
    );
};

export default LoginPopup;
