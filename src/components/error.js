import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function ErrorElement() {
  return (
    <Container>
      <Row>
        <Col>
          <h4>404 Error</h4>
          <h5>
            Oops..The page you are requesting is not available.
            Please check the link or go to <a href="/"> home page</a>.
          </h5>
          <p>
            Go ahead and email joyee816@gmail.com if you
            feel like this is a mistake.
          </p>
        </Col>
      </Row>
    </Container>

  )
}
export default ErrorElement;