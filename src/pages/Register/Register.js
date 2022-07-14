import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loadin from '../Shared/Loading/Loadin';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleNameBlur = event => {
        setName(event.target.value);

    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlepassBlur = event => {
        setPass(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }
    if (user) {
        console.log("user", user);
    }




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pass !== confirmPass) {
            setError("your password didn't match")
            return;
        }
        if (pass.length < 6) {
            setError("password should be 6 character long");
            return;
        }
        await createUserWithEmailAndPassword(email, pass, confirmPass);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')

    }
    const navigateSignUp = () => {
        navigate('/login');

    }
    if (loading) {
        return <Loadin></Loadin>
    }
    return (
        <div className='py-4'>
            <div className='mx-auto login-container  '>

                <h2 className='text-center text-3xl font-bold  text-primary mt-2'>Please Signup!!!!!</h2>
                <form onSubmit={handleSubmit} className=' m-5'>
                    <div>
                        <label class="label">
                            <span class="label-text">Name?</span>

                        </label>
                        <input onBlur={handleNameBlur} type="name" name="name" placeholder="Enter name" required class="input input-bordered  w-full max-w-xs" />

                        <label class="label">
                            <span class="label-text">Email?</span>

                        </label>
                        <input onBlur={handleEmailBlur} ttype="email" name="email" placeholder="Enter email" required class="input input-bordered  w-full max-w-xs" />

                        <label class="label">
                            <span class="label-text">Password?</span>

                        </label>
                        <input onBlur={handlepassBlur} type="password" name="password" placeholder="Password" required class="input input-bordered  w-full max-w-xs" />

                        <label class="label">
                            <span class="label-text">Confirm Password?</span>

                        </label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" placeholder="Confirm Password" required class="input input-bordered  w-full max-w-xs" />

                    </div>
                    <p className='text-danger'>{error}</p>
                    <div className='text-center'>
                        <button className='btn btn-primary w-100 mt-3'>Register</button>
                    </div>


                    <p className='mt-4 text-danger fw-bold' >Already have an account? <span className='text-primary' onClick={navigateSignUp} style={{ cursor: 'pointer' }}>Please Login</span></p>

                    <SocialLogin></SocialLogin>


                </form>


            </div>
        </div>
    );
};

export default Register;