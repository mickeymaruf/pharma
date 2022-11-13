import React, { useState } from 'react';
import clock from '../../assets/clock.png'
import calendar from '../../assets/calendar.png'
import car from '../../assets/car.png'
import smile from '../../assets/smile.png'
import chairBg from '../../assets/chairBg.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const appointmentSteps = [
    {
        _id: 1,
        name: "Make Calculation",
        desc: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
        image: clock
    },
    {
        _id: 2,
        name: "Make Calculation",
        desc: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
        image: calendar
    },
    {
        _id: 3,
        name: "Make Calculation",
        desc: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
        image: car
    },
    {
        _id: 4,
        name: "Make Calculation",
        desc: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
        image: smile
    }
]

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <section className='text-secondary mt-[60px] grid grid-cols-12'>
            <div className='bg-primary col-span-5 py-20 pr-16' style={{borderRadius: '100% 50% 66% 34% / 0% 100% 0% 100%'}}>
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
            <div
                className='col-span-7 pt-20 pl-16'
                style={{
                    background: `url(${chairBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    borderRadius: "0% 100% 22% 78% / 79% 0% 100% 21% "
                }}
            >
                <DayPicker
                    className='shadow-lg inline-block p-8 border rounded-xl'
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
                <p>You picked {format(selectedDate, 'PP')}.</p>
            </div>
        </section>
    );
};

export default Appointment;