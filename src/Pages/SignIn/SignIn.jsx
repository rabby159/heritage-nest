/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn/SocialSignIn";

const SignIn = () => {
  const { createUser, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      Swal.fire({
        title: "Congratulation",
        text: "Your account is ready to use. You will be redirected to the Home page in a few seconds..",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        title: "Congratulation",
        text: "Welcome Back",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
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
            <p>-Or-</p>
            <SocialSignIn></SocialSignIn>
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
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="card-body"
                    >
                      <div className="form-control">
                        <input
                          type="email"
                          {...register("email", { required: true })}
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                        />
                        {errors.email && (
                          <span className="text-xs text-red-600">
                            Your Email is required
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          {...register("number", { required: true })}
                          name="number"
                          placeholder="Phone"
                          className="input input-bordered"
                        />
                        {errors.number && (
                          <span className="text-xs text-red-600">
                            Your Phone is required
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <input
                          type="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                          })}
                          name="password"
                          placeholder="password"
                          className="input input-bordered"
                        />
                        {errors.password && (
                          <span className="text-xs text-red-600">
                            Your Password is required
                          </span>
                        )}
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
              <p>-Or-</p>
            <SocialSignIn></SocialSignIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
