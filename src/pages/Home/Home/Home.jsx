import React from 'react';
import Banner from '../Banner/Banner';
import About from '../about/About';
import Services from '../services/Services';
import Footer from './../../shared/footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;