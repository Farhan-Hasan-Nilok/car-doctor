// import Navbar from "../shared/navbar/Navbar";

import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import Features from "./Features";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
            <Contact />
            <Products />
            <Features />
        </div>
    );
};

export default Home;