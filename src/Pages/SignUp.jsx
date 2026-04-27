import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../Supabase'; 
import Input from '../Components/Input';
import CTA2 from '../Components/CTA2';
import log_logo from '../Assets/log_logo.png';
import './LogIn.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        if (e) e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        const { error: dbError } = await supabase
            .from('profiles')
            .insert([
                { 
                    name: username, 
                    email: email, 
                    password: password 
                }
            ]);

        if (dbError) {
            setError(dbError.message);
            console.error("Signup error:", dbError);
        } else {
            localStorage.setItem('userName', username);
            navigate('/Home');
        }
    };

    return (
        <div className='log_body log_div flex_column flex_row'>
            <div className='input_div gap'>
                <img src={log_logo} alt="EZ-SAVER Logo" />
                <h1 className='log_h'>Create Your Account</h1>
            
                <div className='column_start'>
                    <p className='login_p'>Username</p>
                    <Input 
                        title="Enter Your Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />

                    <p className='login_p'>E-mail</p>
                    <Input 
                        title="Enter Your E-mail" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />

                    <div>
                        <p className='login_p'>Password</p>
                        <Input 
                            title="Enter Your Password" 
                            type="password"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <Input 
                            title="Confirm Your Password" 
                            type="password"
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />

                        {error && <p style={{color: 'red', fontSize: '12px'}}>{error}</p>}

                        <div className='checkbox_div'>
                            <input type="checkbox" className='checkbox' />
                            <p className='login_p'>Remember Me</p>
                        </div>
                    </div>
                </div>

                <div onClick={handleSignUp} style={{cursor: 'pointer'}} className='flex_column'>
                    <CTA2 title="Sign up" />
                    <Link to='/Home' className='top1'>
                        <p className='login_p underline'>Sign up later</p>
                    </Link>
                    <Link to='/LogIn'>
                        <p className='login_p'>Already have an account? <span className='underline'>Log in</span></p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;