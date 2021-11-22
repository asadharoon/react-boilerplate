import React from "react";
import { Col, Row } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../@core/helpers/toAbsoluteUrl";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Row style={{ minHeight: "100vh" }}>
        <Col xs={{ span: 12 }} lg={{ span: 4 }}>
          <aside
            className="sm-offset-1 h-100"
            style={{
              backgroundImage: `url(${toAbsoluteUrl(
                "/assets/media/bg-auth.jpg"
              )})`,

              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 className="font-size-h1">Welcome to BoilerPlate</h3>
            <p>Enjoy</p>
          </aside>
        </Col>
        <Col lg={7} style={{ minHeight: "90vh" }}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
