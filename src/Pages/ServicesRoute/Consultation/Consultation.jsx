import React from "react";
import conImg from '../../../assets/consultation.jpeg'

const Consultation = () => {
  return (
    <div className="mx-5 md:mx-20 my-16 grid grid-cols-1 lg:grid-cols-3">
      <div className="p-8 bg-[#ECF5FF] lg:col-span-2">
        <div className="flex items-center gap-3">
          <div>
            <div className="border-2 w-14 border-orange-400"></div>
          </div>
          <div className="text-[#F06711] font-semibold text-lg">
            <p>Meet the Team For Book Consultation</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-4xl">
          Meet the stewards of your heritage journey.
          </h2>
          <p className="mt-6 mb-12">
            Each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.
          </p>
        </div>
      </div>
      <div>
        <img src={conImg} alt="" />
      </div>
    </div>
  );
};

export default Consultation;
