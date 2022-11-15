import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FieldError from '../../components/FieldError';
import { useAuth } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useAuth();
    const [loginErr, setLoginErr] = useState(null);
    const onSubmit = data => {
        setLoginErr(null);
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
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
                            <Link className="label-text-alt text-secondary hover:underline">Forgot password?</Link>
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
                    <div className='flex items-center gap-5 my-2 px-3'>
                        <div className='w-full h-px bg-[#1152783b] rounded-full'></div>
                        <div>OR</div>
                        <div className='w-full h-px bg-[#1152783b] rounded-full'></div>
                    </div>
                    <div className="form-control mt-1">
                        <button className="border border-secondary text-secondary py-[10px] rounded-full hover:bg-secondary hover:text-white duration-100">Continue with Google</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;