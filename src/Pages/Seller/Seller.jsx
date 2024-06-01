import React from "react";

const Seller = () => {
  return (
    <div className="mx-5 md:mx-20 my-20">
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

      <div className="bg-[#ECF5FF] p-5 rounded-md mt-10">
        <h3 className="text-xl font-semibold mb-3">Property Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <p>Plot Size</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Sqft</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Finish Square Feet</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            <p className="text-xs">
              Enter the are of space which have undergone any construction.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-3">
          <div>
            <p>Number of Bedrooms</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Number of Bath</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Number of Half Baths</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Number 3/4 Baths</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <p>Price/sqft</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <p>Finish Square Feet</p>
            <input
              type="number"
              placeholder=""
              className="input input-bordered w-full max-w-xs"
            />
            <p className="text-xs">
              Enter the are of space which have undergone any construction.{" "}
            </p>
          </div>
          <div className="flex items-center">
            <div>
              <p>Year Build</p>
              <input
                type="number"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">No Data</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-3 border-b-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <h3 className="text-base font-semibold mb-3">Sales Type</h3>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">New</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Resale</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Forecloaure</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-base font-semibold mb-3">Contraction Type</h3>
          <div className="flex flex-wrap gap-20 items-center">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Adobe</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Brick</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Log</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Metal</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Stone</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Straw</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Wood</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Concrete Block</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-base font-semibold mb-3">Flooring Type</h3>
          <div className="flex flex-wrap gap-20 items-center">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Adobe</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Brick</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Log</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Metal</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Stone</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Straw</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Wood</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Concrete Block</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-base font-semibold mb-3">Parking</h3>
          <div className="flex flex-wrap gap-20 items-center">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Adobe</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Brick</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Log</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Metal</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Stone</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Straw</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Wood</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Concrete Block</span>
              </label>
            </div>
          </div>
        </div>

        <div className="my-5">
          <p className="text-base font-semibold">Number Of parking Space</p>
          <input
            type="number"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-3">
          <div>
            <p>Number of Bedrooms</p>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div>
            <p>Number of Bath</p>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div>
            <p>Number of Half Baths</p>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div>
            <p>Number 3/4 Baths</p>
            <select class="select select-bordered w-full max-w-xs">
              <option disabled selected></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
