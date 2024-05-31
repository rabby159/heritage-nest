/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="mt-20 mx-5 md:mx-20">
        
            <h2 className="text-4xl font-bold text-center mb-14">Testimonials</h2>
        
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-[#ECF5FF] p-5 rounded-md text-center">
              <div className="flex justify-center mb-5">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={testimonial.rating}
                  readOnly
                />
              </div>

              <p>{testimonial.details}</p>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-5">
                  <img src={testimonial.img_url} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p>{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
