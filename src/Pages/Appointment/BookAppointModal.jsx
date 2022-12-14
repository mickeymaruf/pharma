import React from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookAppointModal = ({ appointment, date, setAppointment, refetch }) => {
    const { user } = useAuth();
    const { name, slots, price } = appointment;
    const { register, handleSubmit } = useForm({
        defaultValues: {
            patient: user?.displayName,
            email: user?.email,
            phone: user?.phoneNumber,
        }
    });
    const onSubmit = data => {
        data.treatment = name;
        data.price = price;
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setAppointment(null);
                    toast.success("Booking confirmed");
                    refetch();
                } else {
                    toast.error(data.message);
                    setAppointment(null);
                }
            })
    };
    return (
        <div className='text-secondary'>
            <input type="checkbox" id="BookAppointModal" className="modal-toggle" />
            <div className="modal bg-black bg-opacity-30">
                <div className="modal-box relative bg-white">
                    <label htmlFor="BookAppointModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid gap-3'>
                        <input {...register('appointmentDate', { required: true })} type="text" className="input w-full bg-gray-200" defaultValue={date} readOnly />
                        <select {...register('slot', { required: true })} className="select border outline-0 border-[#1152783b] rounded-lg select-md w-full">
                            {
                                slots.map((slot, index) => <option value={slot} key={`slot${index}`}>{slot}</option>)
                            }
                        </select>
                        <input {...register("patient", { required: true })} type="text" placeholder="Your name" className="input w-full bg-gray-200" readOnly />
                        <input {...register("email", { required: true })} type="text" placeholder="Your email address" className="input w-full bg-gray-200" readOnly />
                        <input {...register("phone", { required: true })} type="text" placeholder="Your phone number" className="input border-[#1152783b] w-full" />
                        <input className='block w-full rounded-full py-3 font-medium bg-[#115278] text-white cursor-pointer' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointModal;