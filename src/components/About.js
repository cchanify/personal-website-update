import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const About = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">About Me</h1>
        <p className="lead">About1</p>
        <hr className="my-2" />
        <p>About2</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;
