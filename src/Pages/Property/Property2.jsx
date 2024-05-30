import React from "react";
import frame3 from "../../assets/frame3.jpeg";
import frame4 from "../../assets/frame4.jpeg";
import playButton from "../../assets/playbutton.png";
import { RiFindReplaceLine } from "react-icons/ri";

const Property2 = () => {
  return (
    <div className="mx-5 md:mx-20 grid grid-cols-1 xl:grid-cols-2 mb-20">
      <div>
        <img
          className="w-[485px] h-[400px] rounded"
          src={frame3}
          alt="frame1 img"
        />
        <img
          className="w-[452px] h-[240px] rounded md:ml-28 -mt-32"
          src={frame4}
          alt="frame2 img"
        />
        <div className="relative ">
          <div className="absolute left-4 md:left-96 w-24 -mt-72 ml-16">
            <img src={playButton} alt="" />
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-3">
          <div>
            <div className="border-2 w-14 border-orange-400"></div>
          </div>
          <div className="text-[#F06711] font-semibold text-lg">
            <p>Property buying</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-4xl">Efficient and Transparent Home Buying Solutions</h2>
          <p className="mt-6 mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <button className="bg-[#ECF5FF] p-3 text-blue-600 font-medium rounded-sm inline-flex items-center gap-2"><RiFindReplaceLine /> Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default Property2;