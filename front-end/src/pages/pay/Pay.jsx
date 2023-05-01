import './Pay.scss'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { useState, useEffect } from 'react';
import newRequest from '../../utils/newRequest'
import { useParams } from 'react-router-dom';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe('your stripe public key');

const Pay = () => {

    const [clientSecret, setClientSecret] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret)
            } catch (error) {
                console.log(error);
            }
        }

        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe'
    }
    const options = {
        clientSecret,
        appearance
    }
    return (
        <div className='pay'>
            {
                clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )
            }
        </div>
    )
}

export default Pay