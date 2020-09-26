import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

const SignUp = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      label="Firstname"
                      placeholder="Enter firstname"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Lastname"
                      placeholder="Enter lastname"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email"
                  placeholder="Enter email"
                  value=""
                  type="email"
                  errorMessage=""
                  onChange={() => {}}
                />

                <Input
                  label="Password"
                  placeholder="Enter password"
                  value=""
                  type="password"
                  onChange={() => {}}
                />

                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default SignUp;
