import React from 'react';
import { Jumbotron, Button, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Media } from 'reactstrap';
import styled from 'styled-components';

import img from './images/crater.jpg';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        {/* <h1 className="display-3">Hello, world!</h1> */}
        <p className="lead">My name is Connor and I'm a senior computer science major at Middlebury College</p>
        <hr className="my-2" />
        <p>During my four years at Midd I helped captain the Men's Ultimate Frisbee Team, participated in Middlebury's computer science club, MiddleEndian, and tutored students taking Data Structures and Computer Architecutre.</p>
        <p>I'm passionate about building sustainable, highly functional products that help people live better lives. My computer science coursework has been directed along a systems track, and I have experience writing low level C programs and peeling back the layers of abstraction that make computers and user applications work. My interests lie in system security, blockchain technology. I'm a fan of the <a href="https://www.dreamsongs.com/RiseOfWorseIsBetter.html" target="_"> Worse Is Better</a> UNIX philosophy and a lover of clean, minimal interfaces. </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>

  );
};

export default Home;
