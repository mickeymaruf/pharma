import React, { useState } from 'react';
import clock from '../../assets/clock.png'
import calendar from '../../assets/calendar.png'
import car from '../../assets/car.png'
import smile from '../../assets/smile.png'
import chairBg from '../../assets/chairBg.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import BookAppointModal from './BookAppointModal';
import AppointCard from './AppointCard';
import { useQuery } from '@tanstack/react-query';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const appointmentSteps = [
    {
        _id: 1,
        name: "Check Available Time",
        desc: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
        image: clock
    },
    {
        _id: 2,
        name: "Arrange Date & Time",
        desc: "Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities.",
        image: calendar
    },
    {
        _id: 3,
        name: "Arrive in Time",
        desc: "Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through services.",
        image: car
    },
    {
        _id: 4,
        name: "Happy & Satisfied",
        desc: "Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured.",
        image: smile
    }
]

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState(null);

    const { data: appointments, isLoading } = useQuery({
        queryKey: ['appointments'],
        queryFn: () => fetch('http://localhost:5000/appointments').then(res => res.json())
    })

    return (
        <section className='pb-20'>
            <div className='text-secondary mt-[60px] grid grid-cols-12 items-start'
                style={{
                    background: `url(${chairBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    borderRadius: "0% 100% 22% 78% / 79% 0% 100% 21% "
                }}
            >
                <div className='bg-primary col-span-5 py-20 pr-16' style={{ borderRadius: '100% 50% 66% 34% / 0% 100% 0% 100%' }}>
                    <div className='w-4/6 ml-auto text-white'>
                        <h4 className='text-3xl text-secondary font-playfair'>Calculate your</h4>
                        <h1 className='text-5xl font-bold font-playfair'>Doctor Costs</h1>
                        <p className='text-sm mb-10'>
                            Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.
                        </p>
                        {
                            appointmentSteps.map(item => <div
                                key={item._id}
                                className='flex gap-3 mb-8'
                            >
                                <div>
                                    <img className='w-28' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h4 className='text-xl font-playfair'>{item.name}</h4>
                                    <p className='text-xs text-[#ffffffb9]'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
                <div className='col-span-7 pt-28 pl-16'>
                    <div className='w-11/12'>
                        <div className='flex items-center justify-evenly'>
                            <DayPicker
                                className='shadow-lg inline-block p-8 border rounded-xl'
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                            <p className='text-center'>You picked <strong>{format(selectedDate, 'PP')}</strong></p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto pt-16 grid grid-cols-3 gap-8'>
                {
                    !appointments ?
                        // Skeleton loading... 
                        [...Array(6).keys()].map((item, idx) => <div key={'appoinmentsSkeleton' + idx} className='shadow-md border px-12 py-5 rounded-lg text-center'>
                            <h4 className='text-lg font-medium text-primary mb-1'><Skeleton baseColor="#23C3BB" /> </h4>
                            <p className='text-sm'><Skeleton /> </p>
                            <p className='text-sm mb-2'><Skeleton /> </p>
                            <label htmlFor="BookAppointModal" className="inline-block bg-[#11527832] px-20 rounded-full text-sm text-white py-3 mt-1 font-medium"><Skeleton /> </label>
                        </div>)
                        :
                        appointments.map(appointment => <AppointCard
                            key={appointment._id}
                            appointment={appointment}
                            setAppointment={setAppointment}
                        />)
                }
                {
                    appointment &&
                    <BookAppointModal
                        appointment={appointment}
                        selectedDate={selectedDate}
                        setAppointment={setAppointment}
                    />
                }
            </div>
        </section>
    );
};

export default Appointment;