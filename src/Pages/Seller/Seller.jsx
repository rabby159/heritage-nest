/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Location from "./Location/Location";
import PropertySeller from "./PropertySeller/PropertySeller";
import UploadSaller from "./UploadSaller/UploadSaller";

const Seller = () => {
  return (
    <div className="mx-5 md:mx-20 my-20">
      <Location></Location>
      <PropertySeller></PropertySeller>
      <UploadSaller></UploadSaller>
    </div>
  );
};

export default Seller;
