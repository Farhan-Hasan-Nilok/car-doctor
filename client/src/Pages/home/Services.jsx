import { useEffect, useState } from "react";
import right from '../../assets/icons/rightArrow2.svg'
import { Link } from "react-router-dom";
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-eight-ashy.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-8">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#FF3811]">Services</h3>
                <h2 className="text-5xl font-extrabold">Our Service Area</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <div key={service._id} className="card w-96 bg-base-100 shadow-xl mt-3 border-2">
                        <figure className="px-5 pt-5">
                            <img src={service.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{service.title}</h2>
                            <div className="flex items-center justify-between">
                                <p className="text-[#FF3811] font-semibold">Price: ${service.price}</p>
                                <Link to={`/checkout/${service._id}`}><img src={right} alt="" className="text-[#FF3811]" /></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="my-10 text-center">
                <button className="btn border-1 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white bg-white">More Services</button>
            </div>
        </div>
    );
};

export default Services;