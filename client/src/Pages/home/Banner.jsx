import img1 from '../../assets/images/banner/5.jpg';
import img2 from '../../assets/images/banner/1.jpg';
import img3 from '../../assets/images/banner/2.jpg';
import img4 from '../../assets/images/banner/3.jpg';
import left from '../../assets/icons/leftArrow.svg';
import right from '../../assets/icons/rightArrow1.svg';
const Banner = () => {
    return (
        <div className="carousel w-full h-[37.5rem] rounded-lg mt-8">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-end items-center w-[29rem] h-full bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
                    <div className='space-y-7 pl-24'>
                        <h1 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] hover:bg-[#FF3811] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent hover:bg-transparent text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-[#ffffff33] hover:bg-transparent mr-5"><img src={left} alt="" /></a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"><img src={right} alt="" /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end items-center w-[29rem] h-full bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
                    <div className='space-y-7 pl-24'>
                        <h1 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] hover:bg-[#FF3811] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent hover:bg-transparent text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-[#ffffff33] hover:bg-transparent mr-5"><img src={left} alt="" /></a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"><img src={right} alt="" /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end items-center w-[29rem] h-full bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
                    <div className='space-y-7 pl-24'>
                        <h1 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] hover:bg-[#FF3811] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent hover:bg-transparent text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#ffffff33] hover:bg-transparent mr-5"><img src={left} alt="" /></a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"><img src={right} alt="" /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end items-center w-[29rem] h-full bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)">
                    <div className='space-y-7 pl-24'>
                        <h1 className='text-6xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className='btn bg-[#FF3811] hover:bg-[#FF3811] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent hover:bg-transparent text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-[#ffffff33] hover:bg-transparent mr-5"><img src={left} alt="" /></a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811]"><img src={right} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;