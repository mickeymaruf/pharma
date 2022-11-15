import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import FieldError from '../../components/FieldError';
import { useAuth } from '../../contexts/AuthProvider';

const ForgetPasswordModal = ({ setShowModal }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [customErr, setCustomErr] = useState(null);
    const { resetPassword } = useAuth();
    const onSubmit = data => {
        setCustomErr(null);
        resetPassword(data.email)
            .then(() => {
                toast.success("A password reset link has been sent to your email");
                setShowModal(false);
                reset();
            })
            .catch(err => {
                customErr(err.message);
            });
    }
    return (
        <>
            <input type="checkbox" id="forget_password_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="forget_password_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-2xl text-center mb-5'>Forgot password?</h2>
                        <p className='text-sm mb-2'>Send a verification mail to your email address</p>
                        <input type="text" {...register('email', {
                            required: "Email is required",
                            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Please provide a valid email!" }
                        })} placeholder="email" className="input input-bordered border-[#1152783b] w-full" />
                        {
                            errors.email && <FieldError message={errors.email?.message} />
                        }
                        <div className="form-control mt-3">
                            <button className="btn-secondary w-fit px-8 py-[10px] text-white">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgetPasswordModal;