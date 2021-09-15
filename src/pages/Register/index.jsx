import React from "react";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  DatePicker,
  message,
  Select,
} from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  IdcardOutlined,
  UserOutlined,
  LockOutlined,
  UnlockOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { requestUserRegister } from "../../services/auth";
import BrandLogo from "../../assets/images/company-logo.svg";

import "./style.scss";

const { Option } = Select;

const validationRules = {
  employeeId: [{ required: true, message: "Please enter your Employee Id" }],
  firstName: [{ required: true, message: "Please enter your First Name" }],
  lastName: [{ required: true, message: "Please enter your Last Name" }],
  emailAddress: [
    { required: true, message: "Please enter your Email Address" },
  ],
  dateOfBirth: [
    {
      required: true,
      message: "Please enter your Date Of Birth",
    },
  ],
  username: [{ required: true, message: "Please enter your Username" }],
  password: [
    { required: true, message: "Please enter your Password" },
    { min: 8, message: "Password must be at least 8 characters " },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Please confirm your password!",
    },
    ({ getFieldValue }) => ({
      validator(_rule, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          "The two passwords that you entered do not match!",
        );
      },
    }),
  ],
};

const countries = {
  India: ["Mumbai", "Pune", "Banglore", "Surat"],
  USA: ["New York", "San Francisco", "Austin", "Dallas"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Salvador"],
};

export default function Register() {
  const history = useHistory();
  const [cities, setCities] = React.useState([]);
  const [selectedCounty, setSelectedCountry] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  const {
    mutate: registrationMutation,
    isLoading: fetchingRegistration,
    isSuccess: successfullyRegistered,
  } = useMutation((data) => requestUserRegister(data));

  const countryList = Object.keys(countries).map((key) => ({
    name: key,
  }));

  function handleCountryChange(value) {
    const citiesSel = value !== "" ? countries[value] : "";
    setSelectedCountry(value);
    setCities(citiesSel);
    setSelectedCity("");
  }

  function handleStateChange(value) {
    setSelectedCity(value);
  }

  const onFinish = (values) => {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailAddress: values.emailAddress,
      dob: moment(values.dateOfBirth).format("DD-MM-YYYY"),
      country: selectedCounty,
      location: selectedCity,
      userName: values.username,
      password: values.password,
      // cellPhone: "9876543210",
      // homePhone: "9876543211",
      // locationId: 107,
      // organizationId: 177,
      // supervisorId: 127,
    };
    registrationMutation(body);
  };

  React.useEffect(() => {
    if (successfullyRegistered) {
      history.push("/auth/login");
      setTimeout(() => {
        message.success("User Successfully Registered");
      }, 1000);
    }
  }, [successfullyRegistered, history]);

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
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Employee ID"
                  name="employeeId"
                  rules={validationRules.employeeId}
                >
                  <Input
                    placeholder="Employee ID"
                    prefix={<IdcardOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Row gutter={6}>
                  <Col md={12}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={validationRules.firstName}
                    >
                      <Input
                        placeholder="First Name"
                        prefix={<UserOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={validationRules.lastName}
                    >
                      <Input
                        placeholder="Last Name"
                        prefix={<UserOutlined />}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Email Address"
                  name="emailAddress"
                  rules={validationRules.emailAddress}
                >
                  <Input
                    placeholder="Email Address"
                    prefix={<MailOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  label="Date of birth"
                  name="dateOfBirth"
                  rules={validationRules.dateOfBirth}
                >
                  <DatePicker size="large" placeholder="Select Date of birth" />
                </Form.Item>
                <Row gutter={6}>
                  <Col md={12}>
                    <Form.Item label="Country" name="country" required>
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Select Country"
                        value={selectedCounty}
                        onChange={handleCountryChange}
                      >
                        {countryList.map((country, key) => (
                          <Option key={key} value={country.name}>
                            {country.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col md={12}>
                    <Form.Item label="State" name="state" required>
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Select State"
                        value={selectedCity}
                        onChange={handleStateChange}
                      >
                        {cities.map((city, key) => (
                          <Option key={key} value={city}>
                            {city}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={validationRules.username}
                >
                  <Input
                    placeholder="Username"
                    prefix={<UserOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Row gutter={6}>
                  <Col md={12}>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={validationRules.password}
                    >
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
                    <Form.Item
                      label="Confirm Password"
                      name="confirmPassword"
                      rules={validationRules.confirmPassword}
                    >
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
                  <Button type="primary" block size="large" htmlType="submit">
                    {fetchingRegistration ? "Loading" : "Register"}
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
