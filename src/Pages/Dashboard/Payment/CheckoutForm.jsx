import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import FieldError from '../../../components/FieldError';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { _id, price, email, patient } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }

        setSuccess("");
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email,
                    },
                },
            })

        if (confirmError) {
            setCardError(error.message);
            setProcessing(false);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            // store payment info in the db
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({
                    price,
                    transactionId: paymentIntent.id,
                    email,
                    bookingId: _id
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Congrats, your payment completed!")
                        setTransactionId(paymentIntent.id)
                        setProcessing(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                    setProcessing(false);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                }
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn bg-sky-800 text-white w-full mt-4 hover:bg-sky-900'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    {processing ?
                        <>
                            <span className='animate-pulse'>Processing</span>
                            <div className='inline-block w-6 h-6 border-2 border-dashed ml-3 rounded-full animate-spin border-sky-800'></div>
                        </>
                        : 'Pay'}
                </button>
            </form>
            {
                cardError && <FieldError message={cardError} />
            }
            {
                success && <div className='mt-4'>
                    <p className='text-green-600'>{success}</p>
                    <p>Your transaction id: <strong>{transactionId}</strong></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;