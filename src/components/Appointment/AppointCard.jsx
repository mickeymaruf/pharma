import React from 'react';

const AppointCard = ({ appointment, setAppointment }) => {
    const { _id, name, slots } = appointment;
    return (
        <div
            key={_id}
            className='shadow-md px-12 py-5 rounded-lg text-center'
        >
            <h4 className='text-lg font-medium text-primary mb-1'>{name}</h4>
            <p className='text-sm'>{slots.length ? slots[0] : "Try Another day"}</p>
            <p className='text-sm mb-2'>{slots.length} spaces available</p>
            <label onClick={() => setAppointment(appointment)} htmlFor="BookAppointModal" className="inline-block btn-primary text-white py-3 mt-1 font-medium">Book Appointment</label>
        </div>
    );
};

export default AppointCard;