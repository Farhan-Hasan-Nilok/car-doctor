import { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { googleSignIn, createUser, updateUserName } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleSignUp = e => {
        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(res => {
            console.log(res.user);
            setSuccess('Email registration successfull');
            updateUserName(name)
            .then(() => console.log('Profile updated'))
            .catch(err => console.log(err.message))
            form.reset();
        })
        .catch(err => setError(err.message))

    }

    const handleGoogleSignIn = () => {
        setSuccess('');
        setError('');
        googleSignIn()
            .then(res => {
                console.log(res.user);
                setSuccess('Registration Successfull')
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className="hero min-h-screen">
            {
                success && <div className="mr-5 mb-5 w-80 toast toast-end alert alert-success">
                    <span className='text-white text-base'>{success}</span>
                </div>
            }
            {
                error && <div className="mr-5 mb-5 w-80 toast toast-end alert alert-error">
                    <span className='text-white text-base'>{error}</span>
                </div>
            }
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-2/5">
                    <img className='lg:mr-10' src={login} alt="" />
                </div>
                <div className="card w-3/5 shadow-2xl bg-base-100 lg:ml-8">
                    <h1 className="text-3xl font-bold text-center my-5">Signup now!</h1>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="Your password" name='password' className="input input-bordered" required />
                            <label className="label justify-start">
                                <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="checkbox checkbox-error" />
                                <span className='ml-3'>Show password</span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn bg-[#FF3811] text-white hover:bg-[#FF3811]" value='Sign up' />
                        </div>
                    </form>
                    <div className='mb-10'>
                        <p className='text-center font-normal mb-5 divider px-5'>Or</p>
                        <div className='flex items-center justify-center'>
                            <button className='btn btn-circle bg-[#F5F5F8] w-[3rem] h-[3rem] p-2 mr-4'><img className='mx-auto' src={facebook} alt="" /></button>
                            <button className='btn btn-circle bg-[#F5F5F8] w-[3rem] h-[3rem] p-2 mr-4'><img className='mx-auto' src={linkedin} alt="" /></button>
                            <button onClick={handleGoogleSignIn} className='btn btn-circle bg-[#F5F5F8] w-[3rem] h-[3rem] p-2'><img className='mx-auto' src={google} alt="" /></button>
                        </div>
                        <p className='text-center my-5'>Already have an account? <Link to='/login' className='text-[#FF3811] font-semibold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;