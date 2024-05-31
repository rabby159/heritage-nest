/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const SignIn = () => {

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const phone = form.number.value;
        const password = form.password.value;
        
    };


  return (
    <div className="flex justify-center mt-10">
      <div className="card w-[350px] md:w-[400px] bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="text-2xl font-bold">Welcome To Heritage Nest</h2>
          <div role="tablist" className="tabs tabs-bordered ml-5">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="SignIn"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-5 md:p-10">
              <div className="hero">
                <div className="hero-content flex-col">
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                      <div className="form-control">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="input input-bordered"
                          required
                        />
                        <label className="label">
                          <a
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Sign In"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* register  */}
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="CreateAccount"
            />
            <div role="tabpanel" className="tab-content p-5 md:p-10">
              <div className="hero">
                <div className="hero-content flex-col">
                  <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                      <div className="form-control">
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          name="number"
                          placeholder="Phone"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <p className="text-left text-xs mt-2">
                          *Password at least 8 character or longer{" "}
                        </p>
                        <p className="text-left text-xs">
                          *Both uppercase and lowercase latter{" "}
                        </p>
                        <p className="text-left text-xs">
                          *At least one number and symbol like(!@%&){" "}
                        </p>
                      </div>
                      <div className="form-control mt-6">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Register"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
