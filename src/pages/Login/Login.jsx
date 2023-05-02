import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex justify-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login to continue</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>
                  <small>
                    Don't have an account?{" "}
                    <span>
                      {" "}
                      <Link to="/register" className="text-amber-500 underline">
                        Create one!
                      </Link>
                    </span>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <button className="border py-3 flex justify-center items-center gap-2 hover:bg-slate-200">
                <div>
                  <img
                    src="/google_icon.jpeg"
                    className="h-10"
                    alt=""
                  />
                </div>
                <div>Continue with Google</div>
              </button>
              <button className="border py-3 flex justify-center items-center gap-2 hover:bg-slate-200">
                <div>
                  <img
                    src="/github_icon.jpg"
                    className="h-10"
                    alt=""
                  />
                </div>
                <div>Continue with Github</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
