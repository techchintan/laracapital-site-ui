import React from "react";
import { Card, Row, Col, Typography } from "antd";

import "./style.scss";

const { Paragraph } = Typography;

export default function Home() {
  return (
    <div className="home-layout">
      {/* BK:Home Page layout */}
      <Row gutter={[9, 9]}>
        <Col md={24}>
          <Card>
            <Row gutter={[32, 32]}>
              <Col xl={24} md={24} sm={24}>
                <Card>
                  <Row>
                    <Col sm={24}>
                      <Paragraph>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more
                        recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.
                      </Paragraph>
                    </Col>
                  </Row>
                  <div className="user_guid_container">
                    <Row gutter={[32, 32]} justify="center">
                      <Col xs={24} md={6}>
                        <div>
                          <h3 className="title">Step1</h3>
                          <h3>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry standard dummy text ever since
                          </h3>
                        </div>
                      </Col>
                      <Col xs={24} md={8}>
                        <div>
                          <h3 className="title">Step2:</h3>
                          <h3>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry standard dummy text ever since
                          </h3>
                        </div>
                      </Col>
                      <Col xs={24} md={7}>
                        <div>
                          <h3 className="title">Step3:</h3>
                          <h3>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry standard dummy text ever since the 1500s,
                            when an unknown Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry standard dummy text ever since
                          </h3>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
