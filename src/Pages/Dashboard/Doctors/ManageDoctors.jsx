import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {
    const { data: doctors = [] } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch('http://localhost:5000/doctors')
            .then(res => res.json())
    })
    return (
        <section className='p-5 md:px-16 md:py-10'>
            <h3 className='text-3xl mb-3'>Manage Doctors</h3>
            
        </section>
    );
};

export default ManageDoctors;