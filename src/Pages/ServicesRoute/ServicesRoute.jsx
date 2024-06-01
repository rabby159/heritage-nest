import React from 'react';
import ServiceBanner from './ServiceBanner/ServiceBanner';
import BuyerList from '../Shared/BuyerList/BuyerList';
import Testimonials from '../Shared/Testimonials/Testimonials';
import Story from './Story/Story';
import Story2 from './Story/Story2';
import Team from './Team/Team';
import Consultation from './Consultation/Consultation';

const ServicesRoute = () => {
    return (
        <div>
            <ServiceBanner></ServiceBanner>
            <BuyerList></BuyerList>
            <Story></Story>
            <Story2></Story2>
            <Team></Team>
            <Consultation></Consultation>
            <Testimonials></Testimonials>
        </div>
    );
};

export default ServicesRoute;