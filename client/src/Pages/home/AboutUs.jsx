import person from '../../assets/images/aboutUS/person.jpg'
import parts from '../../assets/images/aboutUS/parts.jpg'
const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative lg:w-1/2'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl " />
                        <img src={parts} className="w-2/4 absolute right-8 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 space-y-3 lg:pl-24 lg:py-10'>
                        <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
                        <h2 className="text-5xl font-extrabold">We are qualified & of experience in this field</h2>
                        <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                        <p className="py-4 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;