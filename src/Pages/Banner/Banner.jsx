import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div
      className="hero h-auto mb-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/hfmN0k9/Home-Banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center">
        <div className="max-w-2xl my-28">
          <h1 className="mb-5 text-6xl font-bold text-white">Your Portal to India's Exquisite Real Estate</h1>
          <p className="mb-5 text-white font-medium">
          Seamlessly connecting you to the heartbeat of India's prime properties.
          </p>
          <button className="bg-[#0059B1] p-3 text-white rounded-sm inline-flex items-center gap-2"><RiFindReplaceLine /> Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
