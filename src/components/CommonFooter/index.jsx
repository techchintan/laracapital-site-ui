import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import BrandLogo from "../../assets/images/company-logo.svg";
import "./style.scss";

export default function CommonFooter() {
  return (
    <>
      <Row className="footer-top">
        <Col md={6}>
          <Row
            gutter={[8, 8]}
            style={{ flexFlow: "column", textAlign: "start" }}
          >
            <Col>
              <Link to="/">
                <img className="logo" alt="logo" src={BrandLogo} />
              </Link>
              <p className="logo-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industrys standard dummy text
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row gutter={[8, 8]} className="footer-quick-links">
            <Col>
              <a className="gray-font" href="/about-us">
                About Us
              </a>
            </Col>
            <Col>
              <a className="gray-font" href="/contact-us">
                Contact Us
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="footer-box gray-font font-12px">
        <Col md={8}>
          <b>© Copyright 2021, Lara Capital</b>
        </Col>
      </Row>
    </>
  );
}
