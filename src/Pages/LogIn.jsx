import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import log_logo from '../Assets/log_logo.png';
import google from '../Assets/google.svg';
import Input from '../Components/Input';
import CTA2 from '../Components/CTA2';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    // Regex to block the specific special characters you mentioned
    const forbiddenChars = /[!#$%&'*+\-/=?^_{|}~]/;

    const handleLogin = (e) => {
        if (e) e.preventDefault();
        setError('');

        // 1. Check for forbidden special characters
        if (forbiddenChars.test(email) || forbiddenChars.test(password)) {
            setError("Error: Special characters (!#$%&'*+...) are not allowed.");
            return;
        }

        // 2. Exact match check (Case sensitive for password)
        // Ensure no hidden spaces are causing the failure using .trim()
        if (email.trim() === 'user@ezsaver.com' && password === 'user@1230') {
            navigate('/AdminDashboard');
        } 
        else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='log_body log_div'>
            <div className='input_div gap'>
                <img src={log_logo} alt="EZ-SAVER Logo" />
                <h1 className='log_h top1'>Log In Your Account</h1>
                  
                    <div className='google'>
                        <img src={google} alt="" />
                        <p className='login_P'>Log In with Google</p>
                    </div> 

                    <div className='flex_row gap hr_w top1'>
                      <hr className='hr' />
                      <p  className='login_p'>or</p>
                      <hr className='hr' />
                    </div>
            
                <div className='column_start top1'>
                    <p className='login_p left'>E-mail</p>
                    <Input 
                        title="Enter Your Email" 
                        value={email}
                        // IMPORTANT: Ensure your Input component uses the onChange prop!
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className='space'>
                            <p className='login_p'>Password</p>
                       
                        
                        <div className="password_wrapper">
                            <Input 
                                title="Enter Your Password" 
                                type={showPassword ? "text" : "password"} 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="eye_icon" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? '👁' : '👁'}
                            </span>
                        </div>

                        {/* Detailed Error Section */}
                        {error && (
                            <div className="error_container">
                                {/* <span className="error_icon">⚠️</span> */}
                                <p className="error_text">{error}</p>
                            </div>
                        )}

                        <p className='login_p' style={{cursor: 'pointer'}}>Forgot Your Password?</p>
                        {/* <div className='checkbox_div'>
                            <input type="checkbox" className='checkbox' />
                            <p className='login_p'>Remember Me</p>
                        </div> */}
                    </div>
                </div>

                <div onClick={handleLogin} style={{cursor: 'pointer'}} className='flex_column'>
                    <CTA2 title="Log In" url='/Home'/>
                    <Link to='/Home' className='top1'>
                    <p className='login_p underline'>Log in later</p>
                    </Link>
                    <Link to='/SignUp'>
                    <p className='login_p'>Don't have an account? <span className='underline'>sign up</span></p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LogIn;