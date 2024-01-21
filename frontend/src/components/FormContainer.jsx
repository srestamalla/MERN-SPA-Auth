import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer = ({ childern }) => {
  return (
    <Container>
      <Row className="justify-content-md-cemter mt-5">
        <Col xs={12} md={6} className="card p-5">
          {childern}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
