import './Success.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useEffect } from 'react';

const Success = () => {

    const { search } = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(search);
    const payment_intent = params.get('payment_intent');

    useEffect(() => {
        const makeRequest = async () => {
            try {
                await newRequest.put('/orders', { payment_intent });
                setTimeout(() => {
                    navigate('/orders');
                }, 5000);
            } catch (error) {
                console.log(error)
            }
        }
        makeRequest();
    }, []);


    return (
        <div>
            Payment Successfully.you are being redirected to orders page.
        </div>
    )
}

export default Success