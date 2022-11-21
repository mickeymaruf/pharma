import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Spinner from '../../../components/Spinner';

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { appointmentDate, email, patient, phone, price, slot, treatment } = booking;
    if(navigation.state === "loading"){
        return <Spinner />
    }
    return (
        <section className='px-16 py-10'>
            <h3 className='text-3xl mb-3'>Payment for {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for your appointment on <strong>{appointmentDate}</strong> at <strong>{slot}</strong></p>
            <div className='w-full max-w-lg mt-5 p-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </section>
    );
};

export default Payment;