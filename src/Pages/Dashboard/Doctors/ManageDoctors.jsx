import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../../components/ConfirmationModal';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('http://localhost:5000/doctors', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })
    const closeModal = () => setDeletingDoctor(null);
    const handleDeleteDoctor = _id => {
        fetch(`http://localhost:5000/doctors/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    closeModal()
                    refetch()
                    toast.success('Doctor deleted successfully!')
                }
            })
    }
    return (
        <section className='p-5 md:px-16 md:py-10'>
            <h3 className='text-3xl mb-3'>Manage Doctors</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors &&
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-16 h-16">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{doctor.name}</div>
                                            <div className="text-sm opacity-50">Location: {doctor.location || 'N/A'}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Email: <br />
                                    <span className="badge badge-ghost badge-md">{doctor.email}</span>
                                </td>
                                <td>{doctor.specialty}</td>
                                <th>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation_modal" className="btn bg-red-500 border-0 hover:bg-red-700 text-white btn-xs">Delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deletingDoctor &&
                <ConfirmationModal
                    _id={deletingDoctor._id}
                    name={deletingDoctor.name}
                    closeModal={closeModal}
                    handleDeleteDoctor={handleDeleteDoctor}
                />
            }
        </section>
    );
};

export default ManageDoctors;