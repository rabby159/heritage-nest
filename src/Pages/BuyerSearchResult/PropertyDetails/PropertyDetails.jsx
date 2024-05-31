/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import GoogleMapReact from "google-map-react";
import { useLocation, useParams } from "react-router-dom";
import bathTab from "../../../assets/bathtub.jpg";
import bed from "../../../assets/bed.jpg";
import balcony from "../../../assets/balcony.jpg";
import shelves from "../../../assets/shelves.jpg";
import capa1 from "../../../assets/Capa_1.jpg"
import capa2 from "../../../assets/Capa_2.jpg"
import capa3 from "../../../assets/Capa_3.jpg"
import capa4 from "../../../assets/Capa_4.jpg"
import capa5 from "../../../assets/Capa_5.jpg"
import capa6 from "../../../assets/Capa_6.jpg"
import capa7 from "../../../assets/Capa_7.jpg"
import capa8 from "../../../assets/Capa_8.jpg"
import capa9 from "../../../assets/Capa_9.jpg"
import capa10 from "../../../assets/Capa_10.jpg"
import capa11 from "../../../assets/Capa_11.jpg"
import capa12 from "../../../assets/Capa_12.jpg"
import capa13 from "../../../assets/Capa_13.jpg"
import capa14 from "../../../assets/Capa_14.jpg"
import capa15 from "../../../assets/Capa_15.jpg"
import capa16 from "../../../assets/Capa_16.jpg"
import capa17 from "../../../assets/Capa_17.jpg"
import capa18 from "../../../assets/Capa_18.jpg"
import capa19 from "../../../assets/Capa_19.jpg"
import capa20 from "../../../assets/Capa_20.jpg"
import Services from "../../Shared/Services/Services";
import PopularProperties from "../../Shared/PopularProperties/PopularProperties";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const PropertyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const property = location.state?.property;

  const data = [
    {
      imgelink: "https://i.postimg.cc/rw6CYxLM/details-Img2.jpg",
    },
    {
      imgelink: "https://i.postimg.cc/wTNGwDGQ/details-Img3.jpg",
    },
    {
      imgelink: "https://i.postimg.cc/DZbMRszh/details-Img4.jpg",
    },
    {
      imgelink: "https://i.postimg.cc/W16bcLxt/details-Img.jpg",
    },
  ];

  const [active, setActive] = React.useState(
    "https://i.postimg.cc/W16bcLxt/details-Img.jpg"
  );

  const price = Number(property.price);
  const maxPrice = price + price * 0.1;
  const minPrice = price - price * 0.1;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
      <div className="mx-5 md:mx-20">
        <div className="grid md:grid-cols-2 items-center my-14">
          <div>
            <h2 className="text-3xl font-bold">{property.property_name}</h2>
            <div className="flex gap-2">
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
          </div>
          <div className="font-bold text-3xl">${property.price}</div>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="grid gap-2 md:col-span-2">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={active}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {data.map(({ imgelink }, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 bg-[#ECF5FF] lg:h-3/4">
            <p>Property Value</p>
            <h2 className="text-2xl font-bold my-3">
              ${price} - ${maxPrice}
            </h2>
            <p>Your bid can not be than 10% of the property Minimum value.</p>
            <p className="mt-3">Min</p>
            <input
              type="number"
              placeholder={minPrice}
              className="input input-bordered w-full max-w-xs"
            />
            <p className="mt-3">Max</p>
            <input
              type="number"
              placeholder={maxPrice}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="card-actions justify-center mt-5">
              <button className="btn btn-primary">Bid Property</button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 mt-10">
          <div className="md:col-span-2 bg-[#ECF5FF] p-5">
            <h3 className="text-2xl font-semibold">Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-5 my-7 bg-white p-3 rounded-md">
              <div className="flex gap-3">
                <img src={bed} alt="" />
                <p>2 Bed</p>
              </div>
              <div className="flex gap-3">
                <img src={bathTab} alt="" />
                <p>2 Bath</p>
              </div>
              <div className="flex gap-3">
                <img src={balcony} alt="" />
                <p>2 Balcony</p>
              </div>
              <div className="flex gap-3">
                <img src={shelves} alt="" />
                <p>Fully Furnished</p>
              </div>
            </div>
            <div>
              <p>
                Carpet Area :{" "}
                <span className="font-semibold">{property.total_area}</span>
              </p>
              <p>
                Floor :{" "}
                <span className="font-semibold">Second (Out of 6th floor)</span>
              </p>
              <p>
                Transaction Type :{" "}
                <span className="font-semibold">{property.status}</span>
              </p>
              <p>
                Facing : <span className="font-semibold">North - East</span>
              </p>
              <p>
                Additional Rooms :{" "}
                <span className="font-semibold">
                  1 servant room & 1 gust room
                </span>
              </p>
              <p>
                Age of construction :{" "}
                <span className="font-semibold">New Construction</span>
              </p>
              <p>
                Lift : <span className="font-semibold">1</span>
              </p>
            </div>
          </div>
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={23.7612256}
                lng={90.42076599999996}
                text="My Any"
              />
            </GoogleMapReact>
          </div>
        </div>
        <div className="my-20 p-5 bg-[#ECF5FF] rounded-md">
            <h3 className="text-2xl font-semibold mb-5">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className="flex gap-2 items-center">
                    <img src={capa1} alt="" />
                    <p>Power Back Up</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa2} alt="" />
                    <p>Lift</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa3} alt="" />
                    <p>Club House</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa4} alt="" />
                    <p>Gymnasium</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa5} alt="" />
                    <p>Park</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa6} alt="" />
                    <p>Reserved Parking</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa7} alt="" />
                    <p>Security</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa8} alt="" />
                    <p>Water Storage</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa9} alt="" />
                    <p>Private Terrace/Garden</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa10} alt="" />
                    <p>Vaastu Compliant</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa11} alt="" />
                    <p>Service/Goods Lift</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa12} alt="" />
                    <p>Visitor Parking</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa13} alt="" />
                    <p>Intercom Facility</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa14} alt="" />
                    <p>Maintenance Staff</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa15} alt="" />
                    <p>Waste Disposal</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa16} alt="" />
                    <p>Laundry Service</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa17} alt="" />
                    <p>Internet/Wi-Fi Connectivity</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa18} alt="" />
                    <p>DTH Television Facility</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa19} alt="" />
                    <p>Piped Gas</p>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={capa20} alt="" />
                    <p>Jogging and Strolling Track</p>
                </div>
            </div>
        </div>
      </div>
      <Services></Services>
      <PopularProperties></PopularProperties>
    </div>
  );
};

export default PropertyDetails;
