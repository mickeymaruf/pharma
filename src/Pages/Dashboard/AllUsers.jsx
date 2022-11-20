import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthProvider';

const AllUsers = () => {
    const { user: currentUser } = useAuth();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${currentUser.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    const handleMakeAdmin = _id => {
        fetch(`http://localhost:5000/users/admin/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Only admin has the permission!")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make admin successful');
                }
            })
    }

    return (
        <section className='p-5 md:px-16 md:py-10'>
            <h3 className='text-3xl mb-3'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-200'></th>
                            <th className='bg-gray-200'>Name</th>
                            <th className='bg-gray-200'>Email</th>
                            <th className='bg-gray-200'>Admin</th>
                            <th className='bg-gray-200'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr
                                key={user._id}
                            >
                                <th className='font-normal'>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "admin" ?
                                            <small className='bg-green-500 p-2 text-white rounded-lg font-medium'>admin</small>
                                            :
                                            <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-secondary text-white'>Make Admin</button>
                                    }
                                </td>
                                <td><button className='btn btn-sm bg-red-500 border-0 text-white hover:bg-red-700'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;