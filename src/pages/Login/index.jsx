import React from "react";
import clsx from "clsx";
import { Button } from "antd";
import { Link } from "react-router-dom";

import BrandLogo from "../../assets/images/company-logo.svg";

import "./style.scss";

function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="left_side">
              <h1 className="banner_head">
                Lara is your wealth asset <br /> Management company.
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_side">
              <div className="text-center">
                <img
                  src={BrandLogo}
                  alt="client-logo"
                  className="client-logo"
                />
              </div>
              <div>
                <h2 className="text-center py-3">Login</h2>
                <form>
                  <div className="form-group position_relative">
                    <input
                      type="number"
                      className={clsx("form-control")}
                      placeholder="Enter Mobile Number"
                      name="mobileNumber"
                    />
                  </div>
                  <div className="form-group position_relative">
                    <input
                      type="password"
                      className={clsx("form-control")}
                      placeholder="Enter your Password"
                    />
                    <p className="text-right pt-2">
                      <Link to="/auth/forgotPassword">Forgot Password?</Link>
                    </p>
                  </div>
                  <Button type="primary">Login</Button>
                  <p className="text-center py-2">
                    Don&apos;t have an account yet?
                    <Link to="/auth/register">Register here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
