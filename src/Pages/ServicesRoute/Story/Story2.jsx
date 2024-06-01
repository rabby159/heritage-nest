import React from "react";
import story2 from "../../../assets/story2.jpeg";

const Story2 = () => {
  return (
    <div>
      <div className="mx-5 md:mx-20 my-20 lg:relative">
        <div className="">
          <img className="w-[900px] h-[400px]" src={story2} alt="" />
        </div>
        <div className="p-8 lg:w-[590px] bg-[#ECF5FF] lg:absolute lg:right-0 lg:-mt-56">
          <div className="flex items-center gap-3">
            <div>
              <div className="border-2 w-14 border-orange-400"></div>
            </div>
            <div className="text-[#F06711] font-semibold text-lg">
              <p>Mission Statement</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-4xl">
              Efficient and Transparent Home Buying Solutions
            </h2>
            <p className="mt-6 mb-12">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story2;
