import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import {FaShareAlt , FaFacebookF , FaTwitter , FaPinterestP , FaLinkedin} from "react-icons/fa"

const Collapsible = () => (
  <div>
    <Button 
    size="sm" 
    outline color="info" 
    line="info" 
    id="toggler" 
    style={{ marginBottom: '1rem' }}
    >
    <FaShareAlt size={30}/>
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <Button size="sm" className="ISH"><FaFacebookF size={30}/></Button>
          <Button size="sm" className="ISH"><FaTwitter size={30}/></Button>
          <Button size="sm" className="ISH"><FaPinterestP size={30}/></Button>
          <Button size="sm" className="ISH"><FaLinkedin size={30}/></Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default Collapsible;
