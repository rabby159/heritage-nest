import React from 'react';
import BuyerBanner from './BuyerBanner/BuyerBanner';
import BuyerSearch from './BuyerSearch/BuyerSearch';
import BuyerList from './BuyerList/BuyerList';

const Buyer = () => {
    return (
        <div>
            <BuyerBanner></BuyerBanner>
            <BuyerSearch></BuyerSearch>
            <BuyerList></BuyerList>
        </div>
    );
};

export default Buyer;