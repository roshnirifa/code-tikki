import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase_init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loadin from '../Shared/Loading/Loadin';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const location = useLocation();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlepassBlur = event => {
        setPass(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(email, pass)

    }


    const navigateSignUp = () => {
        navigate('/signin');
    }


    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }


    }
    if (loading) {
        return <Loadin></Loadin>
    }
    return (
        <div className='p-5'>
            <div className='mx-auto login-container p-5 '>

                <h2 className='text-center text-3xl font-bold mb-5 text-primary'>Please login!!!!!</h2>

                <form onSubmit={handleSubmit} action="">
                    <div >
                        <label class="label">
                            <span class="label-text">Email?</span>

                        </label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required placeholder="Enter Your Email" class="input input-bordered  w-full max-w-xs" />


                        <label class="label">
                            <span class="label-text">Password</span>

                        </label>
                        <input onBlur={handlepassBlur} type="password" name="email" required placeholder="Enter Your password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <p className='text-danger'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <div className='text-center'>
                        <button className='btn btn-primary w-100 mt-5'>Login</button>
                    </div>
                </form>




                <p className='mt-4  fw-bold'>New to Online Ide <span className='text-primary ' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Register</span></p>


                <p className='mt-4  fw-bold'>Forget Password? <span className='text-primary' onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset Password</span></p>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;