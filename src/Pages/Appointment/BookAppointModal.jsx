import React from 'react';
import { format } from 'date-fns';
import { useForm } from "react-hook-form";
import { useAuth } from '../../contexts/AuthProvider';

const BookAppointModal = ({ appointment, selectedDate, setAppointment }) => {
    const { user } = useAuth();
    const { name, slots } = appointment;
    const { register, handleSubmit } = useForm({
        defaultValues: {
            patient: user?.displayName,
            email: user?.email,
            phone: user?.phoneNumber
        }
    });
    const onSubmit = data => {
        data.treatment = name;
        console.log(data)
        setAppointment(null);
    };
    return (
        <div className='text-secondary'>
            <input type="checkbox" id="BookAppointModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookAppointModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-3'>
                        <input {...register('appointmentDate', { required: true })} type="text" className="input w-full bg-gray-200" defaultValue={format(selectedDate, 'PP')} readOnly />
                        <select {...register('slot', { required: true })} className="select border outline-0 border-[#1152783b] rounded-lg select-md w-full">
                            {
                                slots.map((slot, index) => <option value={slot} key={`slot${index}`}>{slot}</option>)
                            }
                        </select>
                        <input {...register("patient", { required: true })} type="text" placeholder="Your name" className="input border-[#1152783b] w-full" />
                        <input {...register("email", { required: true })} type="text" placeholder="Your email address" className="input border-[#1152783b] w-full" />
                        <input {...register("phone", { required: true })} type="text" placeholder="Your phone no." className="input border-[#1152783b] w-full" />
                        <input className='block w-full btn-secondary py-3 font-medium text-white cursor-pointer' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointModal;