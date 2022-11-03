import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (e) => {
    const form = e.target;
  };

  return (
    <div>
      <div className="hero w-full bg-base-200">
        <div className="hero-content grid md:grid-cols-2 p-5 md:mx-auto flex-col lg:flex-row">
          <div className="text-center py-5 lg:text-left">
            <img className="w-3/4" src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                />
                <label className="label">
                  Dont,have an account? Please
                  <Link className="text-orange-600" to="/register">
                    register Now
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;