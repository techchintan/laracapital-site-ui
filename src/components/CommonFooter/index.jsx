import React from "react";
import { Row, Col } from "antd";
import { PhoneOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons";

export default function CommonFooter() {
  return (
    <>
      <Row
        gutter={[8, 8]}
        style={{
          justifyContent: "center",
        }}
      >
        <Col md={6}>
          <Row
            gutter={[8, 8]}
            style={{ flexFlow: "column", textAlign: "start" }}
          >
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
            <Col>
              <a className="gray-font" href="/privacy-policy">
                Privacy Policy
              </a>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Row
            gutter={[8, 8]}
            style={{ flexFlow: "column", textAlign: "start" }}
          >
            <Col>
              <PhoneOutlined style={{ marginRight: 10 }} />
              <a className="gray-font" href="tel:123-456-7890">
                123-456-7890
              </a>
            </Col>
            <Col>
              <MailOutlined style={{ marginRight: 10 }} />
              <a className="gray-font" href="mailto:laracapital@gmail.com">
                laracapital@gmail.com
              </a>
            </Col>
            <Col>
              <HomeOutlined style={{ marginRight: 10 }} />
              <span className="gray-font">Office Addres: </span> <br />
              <span className="gray-font">
                3873 Cherry Tree Drive, <br /> Jacksonville, Florida 32223.
              </span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: 32,
          backgroundColor: "#f8f8f8",
          justifyContent: "center",
        }}
        className="gray-font font-12px"
      >
        <Col md={8}>
          <Row
            gutter={[8, 8]}
            style={{
              justifyContent: "center",
            }}
          >
            © Copyrightn 2021, Lara Capital.
          </Row>
        </Col>
      </Row>
    </>
  );
}
