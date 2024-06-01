import React from 'react';
import serviceBanner from '../../../assets/serviceBanner.jpeg'

const ServiceBanner = () => {
    return (
        <div>
            <img className='h-80 w-[1440px]' src={serviceBanner} alt="" />
        </div>
    );
};

export default ServiceBanner;