import logo from '../../../assets/logo.svg';
import bag from '../../../assets/icons/bag.svg';
import seach from '../../../assets/icons/search.svg';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItem = <>
        <li className='text-[#444] font-semibold text-base'><NavLink className={({isActive}) => isActive ? 'bg-gray-200' : ''} to='/'>Home</NavLink></li>
        <li className='text-[#444] font-semibold text-base'><NavLink className={({isActive}) => isActive ? 'bg-gray-200' : ''} to='/my-bookings'>My Bookings</NavLink></li>
        <li className='text-[#444] font-semibold text-base'><NavLink className={({isActive}) => isActive ? 'bg-gray-200' : ''} to='/services'>Services</NavLink></li>
        <li className='text-[#444] font-semibold text-base'><NavLink className={({isActive}) => isActive ? 'bg-gray-200' : ''} to='/blog'>Blog</NavLink></li>
        <li className='text-[#444] font-semibold text-base'><NavLink className={({isActive}) => isActive ? 'bg-gray-200' : ''} to='/contact'>Contact</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log('user log out');
        })
        .then(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    (user && user?.photoURL) && <img className='w-8 h-8 rounded-full mr-4' src={user.photoURL} alt="profile-picture" title={user.displayName} />
                }
                <div className='hidden lg:flex'>
                    <img className='mr-4' src={bag} alt="" />
                    <img className='mr-4' src={seach} alt="" />
                </div>
                {
                    user ? <Link onClick={handleLogOut} className="btn border-1 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white bg-white">Log out</Link>
                        : <Link to='/login' className="btn border-1 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white bg-white">Log in</Link>
                }
            </div>
        </div>

    );
};

export default Navbar;