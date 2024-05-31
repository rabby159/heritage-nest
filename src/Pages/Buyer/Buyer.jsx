import React from 'react';
import BuyerBanner from './BuyerBanner/BuyerBanner';
import BuyerSearch from './BuyerSearch/BuyerSearch';
import BuyerList from './BuyerList/BuyerList';
import PopularProperties from './PopularProperties/PopularProperties';

const Buyer = () => {
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <BuyerSearch></BuyerSearch>
            <BuyerList></BuyerList>
            <PopularProperties></PopularProperties>
        </div>
    );
};

export default Buyer;