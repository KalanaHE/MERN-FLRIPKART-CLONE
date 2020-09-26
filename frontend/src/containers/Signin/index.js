import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signin = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
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
                  Sign in
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Signin;
