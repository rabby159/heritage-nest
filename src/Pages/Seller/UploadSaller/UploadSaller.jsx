/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import uploadFloor from "../../../assets/upload-cloud-01.jpg";

const UploadSaller = () => {
  return (
    <div>
      <div className="bg-[#ECF5FF] p-5 rounded-md mt-10">
        <h3 className="text-xl font-semibold mb-3">Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="mb-3">Upload FLoor</p>
            <div className="bg-white p-5 text-center">
              <div className="flex justify-center">
                <img src={uploadFloor} alt="" />
              </div>
              <p>
                <a className="font-medium">Click to upload</a> or or drag and
                drop
              </p>
              <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
          <div>
            <p className="mb-3">Property Photos</p>
            <div className="bg-white p-5 text-center">
              <div className="flex justify-center">
                <img src={uploadFloor} alt="" />
              </div>

              <p>
                <a className="font-medium">Click to upload</a> or or drag and
                drop
              </p>
              <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mt-5 mb-5">Videos</h3>
          <p className="mb-3">360 Degree Video</p>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>

        <div className="my-5">
          <h3 className="text-xl font-semibold mb-3">Description</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p>Title</p>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <p>Property Description</p>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        <div className="my-5">
          <h3 className="text-xl font-semibold mb-3">Your Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder=""
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <p>Phone Number</p>
              <div className="flex gap-5">
                <select className="select select-bordered">
                  <option disabled selected>
                    BD+880
                  </option>
                  <option>Normal Apple</option>
                  <option>Normal Orange</option>
                  <option>Normal Tomato</option>
                </select>
                <input
                  type="email"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div>
              <p>Secondary Phone Number</p>
              <div className="flex gap-5">
                <select className="select select-bordered">
                  <option disabled selected>
                    BD+880
                  </option>
                  <option>Normal Apple</option>
                  <option>Normal Orange</option>
                  <option>Normal Tomato</option>
                </select>
                <input
                  type="email"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-control flex items-center">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">
              Provide my phone number to my ad responders
            </span>
          </label>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default UploadSaller;
