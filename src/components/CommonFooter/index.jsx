import React from "react";
import { Row, Col } from "antd";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  PhoneOutlined,
  HomeOutlined,
  InstagramOutlined,
  MailOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export default function CommonFooter() {
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col md={6}>
          <Row gutter={[8, 8]} style={{ flexFlow: "column" }}>
            <Col>
              <WarningOutlined style={{ marginRight: 10 }} />
              <a href="/">Terms Condition</a>
            </Col>
            <Col>
              <InfoCircleOutlined style={{ marginRight: 10 }} />
              <a href="/">Privacy</a>
            </Col>
            <Col>
              <CheckCircleOutlined style={{ marginRight: 10 }} />
              <a href="/">Quality assurance</a>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Row gutter={[8, 8]} style={{ flexFlow: "column" }}>
            <Col>
              <PhoneOutlined style={{ marginRight: 10 }} />
              <a href="tel:123-456-7890">123-456-7890</a>
            </Col>
            <Col>
              <MailOutlined style={{ marginRight: 10 }} />
              <a href="mailto:studearn@gmail.com">studearn@gmail.com</a>
            </Col>
            <Col>
              <HomeOutlined style={{ marginRight: 10 }} />
              <span>Office address</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col md={8}>
          <Row gutter={[8, 8]}>
            <Col>
              <WhatsAppOutlined style={{ marginRight: 10 }} />
              {/* <a href="/">Whatapp</a> */}
            </Col>
            <Col>
              <FacebookOutlined style={{ marginRight: 10 }} />
              {/* <a href="/">Facebook</a> */}
            </Col>
            <Col>
              <InstagramOutlined style={{ marginRight: 10 }} />
              {/* <a href="/">Instagram</a> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
