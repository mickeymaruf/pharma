import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user, logOut } = useAuth();
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut().then(data => { }).catch(err => console.log(err));
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
    })

    return (
        <section className='px-16 py-10'>
            <h3 className='text-3xl mb-3'>My appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-200'></th>
                            <th className='bg-gray-200'>Name</th>
                            <th className='bg-gray-200'>Treatment</th>
                            <th className='bg-gray-200'>Date</th>
                            <th className='bg-gray-200'>Time</th>
                            <th className='bg-gray-200'>Price</th>
                            <th className='bg-gray-200'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, idx) => <tr
                                key={booking._id}
                            >
                                <th className='font-normal'>{idx + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid ?
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-sm bg-sky-600 hover:bg-sky-700 text-white border-0'>Pay</button>
                                            </Link>
                                            :
                                            <button className='btn btn-sm bg-green-600 hover:bg-green-600 text-white border-0'>Paid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyAppointment;