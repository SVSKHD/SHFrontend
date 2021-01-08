import React from 'react';
import { Jumbotron, Container, Row, Col} from 'reactstrap';
import {APP_NAME} from "../../config"

const Footer = (props) => {
  return (
    <div className="Footer">
      <Jumbotron className="Footer" fluid>
        <Container fluid>
          <h1 className="display-4">{APP_NAME}</h1>
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Footer;
