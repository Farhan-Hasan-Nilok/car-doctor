import { useLoaderData } from 'react-router-dom';
import CheckOutForm from '../checkoutForm/CheckOutForm';
import Header from '../../../components/Header';

const Bookings = () => {
    const service = useLoaderData();
    
    return (
        <div>
            <Header>Check Out</Header>
            <CheckOutForm service={service} />
        </div>
    );
};

export default Bookings;