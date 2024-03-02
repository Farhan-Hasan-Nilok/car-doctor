import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = ({ service }) => {
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const date = form.date.value;
        const price = form.price.value;
        const customerName = form.customerName.value;
        const email = form.email.value;
        const img = service.img;
        const message = form.message.value;
        const status = 'Pending';
        const booking = {
            serviceName,
            date,
            img,
            price,
            message,
            customerName,
            email,
            status
        };
        console.log(booking)
        fetch('https://car-doctor-server-eight-ashy.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your Booking is Confirmed",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className="pt-5 pb-12">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 p-14 bg-[#F3F3F3] gap-10 rounded-lg">
                    <div>
                        <label className="label label-text text-base">Service Name</label>
                        <input type="text" name="serviceName" className="input input-bordered w-full border-0" defaultValue={service?.title} />
                    </div>
                    <div>
                        <label className="label label-text text-base">Date</label>
                        <input type="date" name="date" className="input input-bordered w-full border-0" />
                    </div>
                    <div>
                        <label className="label label-text text-base">Price</label>
                        <input type="text" name="price" className="input input-bordered w-full border-0" defaultValue={'$ ' + service?.price} />
                    </div>
                    <div>
                        <label className="label label-text text-base">Customer name</label>
                        <input type="text" name="customerName" className="input input-bordered w-full border-0" defaultValue={user?.displayName} />
                    </div>
                    <div>
                        <label className="label label-text text-base">Email</label>
                        <input type="text" name="email" className="input input-bordered w-full border-0" defaultValue={user?.email} />
                    </div>
                    <textarea placeholder="Message" name="message" className="textarea textarea-bordered textarea-lg w-full col-span-2 lg:h-[300px]" ></textarea>
                    <input type="submit" value="Order Confirm" className="btn bg-[#FF3811] text-white hover:bg-[#FF3811] col-span-2" />
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;