/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PopularProperties = () => {
  return (
    <>
    <div className="mt-20 mb-10 mx-5 md:mx-20 flex justify-between items-center">
        <h2 className="font-semibold text-3xl">Popular Properties</h2>
        <a className="link text-blue-700 font-medium text-end">See all property</a>
    </div>
      <div className="mx-5 md:mx-20 hidden lg:block">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.postimg.cc/q7JYNfgN/property1.jpg"
                  alt="property img"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center text-sm">
                  <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                    Apartment
                  </p>
                  <p className="text-end mb-2">Ready to move</p>
                </div>
                <h2 className="card-title ">
                  SunnySlope Suites
                  <div className="badge badge-secondary">NEW</div>
                </h2>
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
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <h2 className="font-extrabold text-2xl mt-2">$35000</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl  h-[440px]">
              <figure>
                <img
                  src="https://i.postimg.cc/5tqTs4Q9/property2.jpg"
                  alt="property img"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center text-sm">
                  <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                    Apartment
                  </p>
                  <p className="text-end mb-2">Ready to move</p>
                </div>
                <h2 className="card-title ">
                  SunnySlope Suites
                  <div className="badge badge-secondary">NEW</div>
                </h2>
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
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <h2 className="font-extrabold text-2xl mt-2">$25000</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl  h-[440px]">
              <figure>
                <img
                  src="https://i.postimg.cc/KYzpDPbf/property3.jpg"
                  alt="property img"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center text-sm">
                  <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                    Apartment
                  </p>
                  <p className="text-end mb-2">Ready to move</p>
                </div>
                <h2 className="card-title ">SunnySlope Suites</h2>
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
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <h2 className="font-extrabold text-2xl mt-2">$28000</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.postimg.cc/q7JYNfgN/property1.jpg"
                  alt="property img"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center text-sm">
                  <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                    Apartment
                  </p>
                  <p className="text-end mb-2">Ready to move</p>
                </div>
                <h2 className="card-title ">SunnySlope Suites</h2>
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
                  <p>Meadowshire Park, Greenfield, USA</p>
                </div>
                <h2 className="font-extrabold text-2xl mt-2">$32000</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-5 gap-5 mt-10 lg:hidden">
        <div className="card bg-base-100 shadow-xl  h-[440px]">
          <figure>
            <img
              src="https://i.postimg.cc/5tqTs4Q9/property2.jpg"
              alt="property img"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-sm">
              <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                Apartment
              </p>
              <p className="text-end mb-2">Ready to move</p>
            </div>
            <h2 className="card-title ">
              SunnySlope Suites
              <div className="badge badge-secondary">NEW</div>
            </h2>
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
              <p>Meadowshire Park, Greenfield, USA</p>
            </div>
            <h2 className="font-extrabold text-2xl mt-2">$35000</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl  h-[440px]">
          <figure>
            <img
              src="https://i.postimg.cc/KYzpDPbf/property3.jpg"
              alt="property img"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-sm">
              <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                Apartment
              </p>
              <p className="text-end mb-2">Ready to move</p>
            </div>
            <h2 className="card-title ">
              SunnySlope Suites
              <div className="badge badge-secondary">NEW</div>
            </h2>
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
              <p>Meadowshire Park, Greenfield, USA</p>
            </div>
            <h2 className="font-extrabold text-2xl mt-2">$25000</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl  h-[440px]">
          <figure>
            <img
              src="https://i.postimg.cc/q7JYNfgN/property1.jpg"
              alt="property img"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center text-sm">
              <p className="bg-[#ECF5FF] w-0.5 text-center rounded-full p-1">
                Apartment
              </p>
              <p className="text-end mb-2">Ready to move</p>
            </div>
            <h2 className="card-title ">
              SunnySlope Suites
              <div className="badge badge-secondary">NEW</div>
            </h2>
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
              <p>Meadowshire Park, Greenfield, USA</p>
            </div>
            <h2 className="font-extrabold text-2xl mt-2">$30000</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProperties;
