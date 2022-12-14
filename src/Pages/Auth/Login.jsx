import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FieldError from '../../components/FieldError';
import { useAuth } from '../../contexts/AuthProvider';
import SocialAuth from './SocialAuth';

import ForgetPasswordModal from './ForgetPasswordModal';
import useAccessToken from '../../hooks/useAccessToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const [loginErr, setLoginErr] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);

    const [loginUserEmail, setLoginUserEmail] = useState("");
    const [token] = useAccessToken(loginUserEmail);
    if (token) {
        navigate(location.state?.from?.pathname || "/", { replace: true });
    }

    const onSubmit = data => {
        setLoginErr(null);
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                setLoginUserEmail(email);
            })
            .catch(err => setLoginErr(err.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center mt-10">
            <div className="card w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h3 className='text-2xl text-center mb-3'>Login</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Email</span>
                        </label>
                        <input type="text" {...register('email', {
                            required: "Email is required",
                            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Please provide a valid email!" }
                        })} placeholder="email" className="input input-bordered border-[#1152783b]" />
                        {
                            errors.email && <FieldError message={errors.email?.message} />
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Password</span>
                        </label>
                        <input type="password" {...register('password', { required: "Password is required" })
                        } placeholder="*********" className="input input-bordered border-[#1152783b]" />
                        {
                            errors.password && <FieldError message={errors.password?.message} />
                        }
                        <label className="my-2">
                            <label onClick={() => setShowModal(true)} htmlFor="forget_password_modal" className="label-text-alt text-secondary hover:underline cursor-pointer">Forgot password?</label>
                        </label>
                    </div>
                    <div className="form-control mt-1">
                        <button className="btn-secondary py-[14px] text-white">Login</button>
                    </div>
                    <p className='mb-2'>
                        {
                            loginErr && <FieldError message={loginErr} />
                        }
                    </p>
                    <p className='text-sm text-center'>New to Pharma? <Link to="/register" className='underline'>Create new account</Link></p>
                    <SocialAuth />
                </form>
                {showModal && <ForgetPasswordModal setShowModal={setShowModal} />}
            </div>
        </div>
    );
};

export default Login;