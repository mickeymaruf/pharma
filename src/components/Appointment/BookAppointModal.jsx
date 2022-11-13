import React from 'react';
import { format } from 'date-fns';

const BookAppointModal = ({ appointment, selectedDate }) => {
    const { name, slots } = appointment;
    return (
        <div className='text-secondary'>
            <input type="checkbox" id="BookAppointModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookAppointModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4">{name}</h3>
                    <form className='grid gap-3'>
                        <input type="text" className="input w-full bg-gray-200" defaultValue={format(selectedDate, 'PP')} readOnly />
                        <select className="select border outline-0 border-[#1152783b] rounded-lg select-md w-full">
                            {
                                slots.map(slot => <option key={slot._id}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input border-[#1152783b] w-full" />
                        <input type="text" placeholder="Type here" className="input border-[#1152783b] w-full" />
                        <input type="text" placeholder="Type here" className="input border-[#1152783b] w-full" />
                        <input className='block w-full btn-secondary py-3 font-medium' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointModal;