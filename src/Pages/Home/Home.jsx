import React from 'react';
import Banner from '../Banner/Banner';
import Property from '../Property/Property';
import Property2 from '../Property/Property2';
import Property3 from '../Property/Property3';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Property></Property>
            <Property3></Property3>
            <Property2></Property2>
            <Services></Services>
        </div>
    );
};

export default Home;