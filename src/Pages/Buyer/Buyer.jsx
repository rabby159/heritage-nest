import React from 'react';
import BuyerBanner from './BuyerBanner/BuyerBanner';
import BuyerSearch from './BuyerSearch/BuyerSearch';
import BuyerList from '../Shared/BuyerList/BuyerList';
import PopularProperties from '../Shared/PopularProperties/PopularProperties';
import NewProperties from './NewProperties/NewProperties';
import Testimonials from '../Shared/Testimonials/Testimonials';

const Buyer = () => {
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <BuyerSearch></BuyerSearch>
            <BuyerList></BuyerList>
            <PopularProperties></PopularProperties>
            <NewProperties></NewProperties>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Buyer;