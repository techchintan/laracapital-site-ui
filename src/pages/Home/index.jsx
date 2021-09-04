import React from "react";
import { useHistory } from "react-router";
import { Typography, Button } from "antd";

import "./style.scss";

const { Title } = Typography;

export default function Home() {
  const history = useHistory();
  return (
    <div className="home-layout">
      <div className="hero-image">
        <div className="hero-text">
          <Title className="hero-title">
            Lara is your wealth <br />
            <span className="blue-font">Asset management</span>
            <br />
            Company.
          </Title>
          <Title level={5} className="hero-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry <br /> Lorem Ipsum has been the industrys standard dummy
            text
          </Title>
          <Button
            type="primary"
            className="hero-button"
            onClick={() => history.push("/contact-us")}
          >
            Conatct Us
          </Button>
        </div>
      </div>
    </div>
  );
}
