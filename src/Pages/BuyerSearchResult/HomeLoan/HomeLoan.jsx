import React, { useState } from "react";

const HomeLoan = () => {

    const [rangeValue, setRangeValue] = useState(100);

    const handleRangeValue = (e) => {
        setRangeValue(e.target.value);
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 bg-[#ECF5FF] p-5 rounded-md">
      <div>
        <h3 className="text-2xl font-semibold mb-3">Need a Home Loan?</h3>
        <p>Select How much Home loan you can take.</p>
      </div>
      <div className="w-full">
        <input
          type="range"
          min={0}
          max="100"
          value={rangeValue}
          className="range"
          step="25"
          onChange={handleRangeValue}
        />
        <div className="w-full flex justify-between text-sm px-2">
          <span>$20K</span>
          <span>$50K</span>
          <span>$100K</span>
          <span>$200K</span>
          <span>$500K</span>
        </div>
      </div>
    </div>
  );
};

export default HomeLoan;
