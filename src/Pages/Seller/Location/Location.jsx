import React from "react";

const Location = () => {
  return (
    <div>
      <div className="bg-[#ECF5FF] p-5 rounded-md">
        <h3 className="text-xl font-semibold mb-3">Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <p>Property Location</p>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Zip Code</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
