import React, { useState } from 'react';
import chairBg from '../../assets/chairBg.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import BookAppointModal from './BookAppointModal';
import AppointCard from './AppointCard';
import { useQuery } from '@tanstack/react-query';
import AppointCardSkeleton from './AppointCardSkeleton';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState(null);

    const date = format(selectedDate, 'PP');

    const { data: appointments = [], isLoading, refetch } = useQuery({
        queryKey: ['appointments', date],
        queryFn: () => fetch(`http://localhost:5000/appointments?date=${date}`)
            .then(res => res.json())
    })

    // Skeleton loading... 
    if (isLoading) {
        return <AppointCardSkeleton />
    }

    return (
        <section className='pb-20'>
            <div className='text-secondary mt-[60px] pb-14 pt-20'
                style={{
                    background: `url(${chairBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                }}
            >
                <div className='w-10/12 mx-auto'>
                    <div>
                        <DayPicker
                            className='shadow-lg inline-block p-8 border rounded-xl'
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You picked <strong>{date}</strong></p>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
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
                        date={date}
                        setAppointment={setAppointment}
                        refetch={refetch}
                    />
                }
            </div>
        </section>
    );
};

export default Appointment;



// import clock from '../../assets/clock.png'
// import calendar from '../../assets/calendar.png'
// import car from '../../assets/car.png'
// import smile from '../../assets/smile.png'

// const appointmentSteps = [
//     {
//         _id: 1,
//         name: "Check Available Time",
//         desc: "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
//         image: clock
//     },
//     {
//         _id: 2,
//         name: "Arrange Date & Time",
//         desc: "Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities.",
//         image: calendar
//     },
//     {
//         _id: 3,
//         name: "Arrive in Time",
//         desc: "Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through services.",
//         image: car
//     },
//     {
//         _id: 4,
//         name: "Happy & Satisfied",
//         desc: "Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured.",
//         image: smile
//     }
// ]

{/* <div className='text-secondary mt-[60px] grid grid-cols-12 items-start'
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
</div> */}