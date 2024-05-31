import React from "react";
import { useLocation } from "react-router-dom";
import Testimonials from "../Shared/Testimonials/Testimonials";
import HomeLoan from "./HomeLoan/HomeLoan";

const SearchResult = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="mx-5 md:mx-20">
      <div className="my-5">
        <button className="btn btn-info mr-5">
          Properties( {searchResults.length} )
        </button>
        <button className="btn btn-info mr-5">New Project</button>
        <button className="btn btn-info mr-5">Pre-launch offers</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {searchResults.map((property, index) => (
          <div key={index} className="p-4">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img className="w-40 h-80" src={property.img_url} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{property.property_name}</h2>
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_604_7670)">
                      <path
                        d="M9.99981 0.0175781C7.77597 0.020225 5.64399 0.90487 4.07158 2.47744C2.49916 4.05001 1.61473 6.18208 1.6123 8.40591C1.6123 12.8009 8.41731 18.6801 9.19564 19.3367L10.0015 20.0176L10.8073 19.3367C11.584 18.6801 18.3906 12.8009 18.3906 8.40591C18.3882 6.1815 17.5033 4.04893 15.9302 2.47626C14.3571 0.903598 12.2242 0.0193427 9.99981 0.0175781ZM9.99981 16.7201C7.44564 14.3934 4.11064 10.6134 4.11064 8.40591C4.11064 6.84401 4.7311 5.34607 5.83554 4.24164C6.93997 3.13721 8.4379 2.51674 9.99981 2.51674C11.5617 2.51674 13.0596 3.13721 14.1641 4.24164C15.2685 5.34607 15.889 6.84401 15.889 8.40591C15.889 10.6092 12.5531 14.3909 9.99981 16.7201Z"
                        fill="#EE6611"
                      />
                      <path
                        d="M9.99994 10.8319C11.3793 10.8319 12.4974 9.71374 12.4974 8.33441C12.4974 6.95508 11.3793 5.83691 9.99994 5.83691C8.62061 5.83691 7.50244 6.95508 7.50244 8.33441C7.50244 9.71374 8.62061 10.8319 9.99994 10.8319Z"
                        fill="#EE6611"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_604_7670">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{property.location}</p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn">Bid Property</button>
                </div>
                <div>
                    <p>Property Details</p>
                    <div className="mt-5 grid grid-cols-2 gap-1 md:gap-5">
                        <div className=" bg-[#ECF5FF] rounded-md p-2">
                            <h4 className="font-semibold">Total Area</h4>
                            <p className="text-sm">{property.total_area}</p>
                        </div>
                        <div className=" bg-[#ECF5FF] rounded-md p-2">
                            <h4 className="font-semibold">Status</h4>
                            <p className="text-xs md:text-sm"> {property.status}</p>
                        </div>
                        <div></div>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <HomeLoan></HomeLoan>
      <Testimonials></Testimonials>
    </div>
  );
};

export default SearchResult;
