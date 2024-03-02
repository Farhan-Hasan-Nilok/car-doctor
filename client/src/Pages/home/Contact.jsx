import calender from '../../assets/icons/calender.svg'
import help from '../../assets/icons/help.svg'
import location from '../../assets/icons/location.svg'

const Contact = () => {
    return (
        <div className='py-5'>
            <div className='grid lg:grid-cols-3 rounded-lg bg-[#151515] p-14 lg:place-items-center'>
                <div className='flex items-center'>
                    <img src={calender} alt="" />
                    <div className='space-y-1 ml-3'>
                        <p className='text-white'>We are open monday-friday</p>
                        <h3 className='text-2xl font-semibold text-white'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={help} alt="" />
                    <div className='space-y-1 ml-3'>
                        <p className='text-white'>Have a question?</p>
                        <h3 className='text-2xl font-semibold text-white'>+2546 251 2658</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={location} alt="" />
                    <div className='space-y-1 ml-3'>
                        <p className='text-white'>Need a repair? our address</p>
                        <h3 className='text-2xl font-semibold text-white'>Liza Street, New York</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;