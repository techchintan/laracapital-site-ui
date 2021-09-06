import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Form, Input, DatePicker } from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  IdcardOutlined,
  UserOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import BrandLogo from "../../assets/images/company-logo.svg";
import "./style.scss";

export default function Register() {
  return (
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
              <img src={BrandLogo} alt="client-logo" className="client-logo" />
            </div>
            <div className="login-text">
              <h1 className="login-title">Registration</h1>
              <Form layout="vertical">
                <Form.Item label="Employee ID" required>
                  <Input
                    placeholder="Employee ID"
                    prefix={<IdcardOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Row gutter={6}>
                  <Col md={12}>
                    <Form.Item label="First Name" required>
                      <Input
                        placeholder="First Name"
                        prefix={<UserOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="Last Name" required>
                      <Input
                        placeholder="Last Name"
                        prefix={<UserOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item name="date-picker" label="Date of birth" required>
                  <DatePicker size="large" placeholder="Select Date of birth" />
                </Form.Item>
                <Form.Item label="Username" required>
                  <Input
                    placeholder="Username"
                    prefix={<UserOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Row gutter={6}>
                  <Col md={12}>
                    <Form.Item required label="Password">
                      <Input.Password
                        placeholder="Password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        prefix={<UnlockOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="Confirm Password" required>
                      <Input.Password
                        placeholder="Confirm password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        prefix={<LockOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
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
  );
}
