import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/AuthProvider";
import trash from '../../assets/icons/trash.svg'
import Swal from "sweetalert2";
const BookingDetails = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `https://car-doctor-server-eight-ashy.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-doctor-token')}`,
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);

    const handleBookingDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-eight-ashy.vercel.app/bookings/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = bookings.filter(item => item._id !== id);
                        setBookings(remaining);
                    })
            }
        });
    }


    const handleDeleteAll = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-eight-ashy.vercel.app/delete-bookings/?email=${user?.email}`, { // I am deleting all bookings based on email not all email data will be deleted but specific email based data will be deletd
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                        }
                        setBookings([]);
                    })
            }
        })
    }
    return (
        <div>
            <Header>Booking Details</Header>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-base font-semibold">
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}

                        {
                            bookings.map(booking =>
                                <tr className="text-base font-semibold" key={booking._id}>
                                    <td><div className="avatar w-24 h-24"><img className="rounded-lg" src={booking.img} alt="" /></div></td>
                                    <td>{booking.serviceName}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.date}</td>
                                    <td>
                                        {
                                            booking?.status === 'Approved'
                                                ? <p className="text-green-600">Approved</p>
                                                : (booking.status === 'Canceled'
                                                    ? <p className="text-red-600">Canceled</p>
                                                    : <p>Pending</p>)
                                        }</td>
                                    <td>
                                        <button onClick={() => handleBookingDelete(booking._id)} className="btn btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={handleDeleteAll} >
                    <div className="flex justify-end items-center w-full my-5">
                        <img src={trash} alt="" />
                        <p className="text-[#444] ml-3 lg:mr-0 mr-5">Clear Bookings</p>
                    </div>
                </button>
            </div>

        </div>
    );
};

export default BookingDetails;