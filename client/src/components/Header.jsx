import checkout from '../assets/images/checkout/checkout.png';
const Header = ({children}) => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#151515] from-0% to-rgba(21, 21, 21, 0.00) to-100% my-10 rounded-xl relative">
                <img className='w-full' src={checkout} alt="" />
                <h2 className='text-white text-5xl font-semibold absolute top-1/2 pl-8'>{children}</h2>
            </div>
        </div>
    );
};

export default Header;