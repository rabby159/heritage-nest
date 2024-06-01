import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import team1 from "../../../assets/team1.jpeg";
import team2 from "../../../assets/team2.jpeg";
import team3 from "../../../assets/team3.jpeg";

import "swiper/css";
import "swiper/css/pagination";

const Team = () => {
  return (
    <div className="mx-5 md:mx-20 my-20">
      <div className="flex items-center gap-3">
        <div>
          <div className="border-2 w-14 border-orange-400"></div>
        </div>
        <div className="text-[#F06711] font-semibold text-lg">
          <p>Our Story</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-4xl mb-10">
          Efficient and Transparent Home Buying Solutions
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper lg:h-[540px]"
      >
        <SwiperSlide>
          <img src={team1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={team2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={team3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={team1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
