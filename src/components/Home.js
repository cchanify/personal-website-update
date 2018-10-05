import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';

import img from './images/crater.jpg';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">My name is Connor and I'm a senior computer science at Middlebury College</p>
        <hr className="my-2" />
        <p>During my four years here I helped captain the Men's Ultimate Frisbee Team, participated in Middlebury's computer science club, MiddleEndian, and helped tutor students taking Data Structures and Computer Architecutre.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>

  );
};

export default Home;
