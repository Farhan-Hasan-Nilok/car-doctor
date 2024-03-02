import error from '../../assets/images/Error/404.png';
const NotFound = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;