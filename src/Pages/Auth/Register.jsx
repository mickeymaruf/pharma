import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FieldError from '../../components/FieldError';
import { useAuth } from '../../contexts/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useAuth();
    const onSubmit = data => {
        const { name, email, password } = data;
        createUser(email, password)
            .then(result => {
                updateUser(name)
                    .then(() => {
                        // Profile updated!
                    }).catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-28">
            <div className="card w-full max-w-sm shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h3 className='text-2xl text-center mb-3'>Register</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-secondary">Name</span>
                        </label>
                        <input type="text" {...register('name', { required: "Enter your name" })} placeholder="name" className="input input-bordered border-[#1152783b]" />
                        {
                            errors.name && <FieldError message={errors.name?.message} />
                        }
                    </div>
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
                        <input type="password" {...register('password', {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" }
                        })
                        } placeholder="*********" className="input input-bordered border-[#1152783b]" />
                        {
                            errors.password && <FieldError message={errors.password?.message} />
                        }
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn-secondary py-[14px] text-white">Register</button>
                    </div>
                    <p className='text-sm text-center'>Already have an account? <Link to="/login" className='underline'>Login</Link></p>
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

export default Register;