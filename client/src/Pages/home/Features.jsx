import { useEffect, useState } from "react";


const Features = () => {
    const [features, setFeature] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-eight-ashy.vercel.app/features')
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#FF3811]">Core Features</h3>
                <h2 className="text-5xl font-extrabold">Why Choose Us</h2>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-10">
                {
                    features.map(feature => <div key={feature._id}>
                        <div className={`p-6 space-y-3 rounded-md border-2 flex flex-col justify-center items-center ${feature.background} ${feature?.color}`}>
                            <img src={feature.img} alt="" />
                            <h4 className="text-lg font-semibold">{feature.title}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;