
import logo from '../../../assets/logo.svg'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#151515] text-white">
                <aside>
                    <img src={logo} alt="" />
                    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
                            <rect opacity="0.1" y="0.0864258" width="36" height="35" rx="17.5" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="35" viewBox="0 0 37 35" fill="none">
                            <rect opacity="0.1" x="0.549988" y="0.0864258" width="36" height="35" rx="17.5" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                            <rect opacity="0.1" x="0.965637" y="0.0864258" width="35" height="35" rx="17.5" fill="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                            <rect opacity="0.1" x="0.515625" y="0.0864258" width="35" height="35" rx="17.5" fill="white" />
                        </svg>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title text-white">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title text-white">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-white">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;