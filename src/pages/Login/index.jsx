import React from "react";
import _ from "lodash";
import { UserAgentApplication } from "msal";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { Link, useHistory } from "react-router-dom";
import { Button, Divider, Form, Input, message } from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  UserOutlined,
  LockOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

import { requestUserLogin } from "../../services/auth";
import { config } from "../../services/microsoftAuth/config";
import BrandLogo from "../../assets/images/company-logo.svg";
import { normalizeError, getUserProfile } from "../../utils/msAuth";
import { userProfileDataAtom } from "../../recoils/auth";

import "./style.scss";

const validationRules = {
  username: [{ required: true, message: "Please enter your Username" }],
  password: [
    { required: true, message: "Please enter your Password" },
    { min: 8, message: "Password must be at least 8 characters " },
  ],
};

export default function Login() {
  const history = useHistory();
  const setUserProfileData = useSetRecoilState(userProfileDataAtom);
  const [userProfileData, setProfileData] = React.useState({});
  const {
    mutate: loginMutation,
    isLoading: fetchingLogin,
    isSuccess: successfullyLoggedIn,
    isError: failedToLogin,
  } = useMutation((data) => requestUserLogin(data));

  const userAgentApplication = new UserAgentApplication({
    auth: {
      clientId: config.clientId,
      redirectUri: config.redirectUri,
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: true,
    },
  });

  const onFinish = (values) => {
    const body = {
      userName: values.username,
      password: values.password,
    };
    loginMutation(body);
  };

  async function handleMicrosoftLogin() {
    try {
      await userAgentApplication.loginPopup({
        scopes: config.scopes,
        prompt: "select_account",
      });
      const user = await getUserProfile(userAgentApplication, config.scopes);
      setProfileData({
        displayName: user.displayName,
        email: user.mail || user.userPrincipalName,
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(normalizeError(err));
    }
  }

  React.useEffect(() => {
    if (successfullyLoggedIn) {
      history.push("/");
      setTimeout(() => {
        message.success("User Successfully Login");
      }, 1000);
    }
  }, [successfullyLoggedIn, history]);

  React.useEffect(() => {
    if (failedToLogin) {
      history.push("/auth/login");
      setTimeout(() => {
        message.error("Something went wrong!");
      }, 1000);
    }
  }, [successfullyLoggedIn, history]);

  React.useEffect(() => {
    if (!_.isEmpty(userProfileData)) {
      localStorage.setItem("isUserLogged", "true");
      setUserProfileData(userProfileData);
      setTimeout(() => {
        history.push("/admin/employees");
      }, 1000);
    }
  }, [userProfileData]);

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
              <h1 className="login-title">Log in</h1>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={validationRules.username}
                >
                  <Input
                    placeholder="Enter your Username"
                    prefix={<UserOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={validationRules.password}
                >
                  <Input.Password
                    placeholder="Enter your password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    prefix={<LockOutlined />}
                    size="large"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" block size="large" htmlType="submit">
                    {fetchingLogin ? "Loading..." : "Login"}
                  </Button>
                  <span className="login-form-forgot">
                    <Link to="/auth/forgotPassword"> Forgot password?</Link>
                  </span>
                </Form.Item>
                <div className="login-register-link">
                  <p className="text-center">
                    Not registered yet?{" "}
                    <Link to="/auth/register">Register</Link>
                  </p>
                </div>
              </Form>
              <Divider>or</Divider>
              <Button
                type="primary"
                block
                size="large"
                icon={<WindowsOutlined />}
                onClick={handleMicrosoftLogin}
              >
                Login With Microsoft
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
