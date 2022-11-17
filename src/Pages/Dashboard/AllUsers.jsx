import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = res.json();
            return data;
        }
    })

    return (
        <section className='px-16 py-10'>
            <h3 className='text-3xl mb-3'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='bg-gray-200'></th>
                            <th className='bg-gray-200'>Name</th>
                            <th className='bg-gray-200'>Email</th>
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;