import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import BrandLogo from "../../assets/images/company-logo.svg";
import "./style.scss";

function Register() {
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
              <div className="login-text">
                <h1 className="login-title">Registration</h1>
                <Form layout="vertical">
                  <Form.Item label="Username" required>
                    <Input
                      placeholder="Enter your username"
                      prefix={<UserOutlined />}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label="Email Address" required>
                    <Input
                      placeholder="Enter your email"
                      prefix={<MailOutlined />}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item required label="Password">
                    <Input.Password
                      placeholder="Enter your password"
                      iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                      prefix={<UnlockOutlined />}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label="Confirm Password" required>
                    <Input
                      placeholder="Confirm your password"
                      prefix={<LockOutlined />}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" block size="large">
                      Register
                    </Button>
                  </Form.Item>
                  <div className="login-register-link">
                    <p className="text-center">
                      Already have an account?{" "}
                      <Link to="/auth/login">Log in</Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
