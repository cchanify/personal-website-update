import React from 'react';
import { Jumbotron, Button} from 'reactstrap';
import styled from 'styled-components';

import img from './images/crater.png';
import styles from './main.css';

var imgStyle = {
  height: '10%',
};

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">My name is Connor, I'm a senior computer science major at Middlebury College</p>
        <hr className="my-2" />
        <p>During my four years at Midd I helped captain the Men's Ultimate Frisbee Team, participated in Middlebury's computer science club, MiddleEndian, and tutored students taking Data Structures and Computer Architecutre.</p>
        <p>I'm passionate about building sustainable, highly functional products that help people live better lives. My computer science coursework has been directed along a systems track, and I have experience writing low level C programs and peeling back the layers of abstraction that make computers and user applications work. My interests lie in system security, blockchain technology. I'm a fan of the <a href="https://www.dreamsongs.com/RiseOfWorseIsBetter.html" target="_"> Worse Is Better</a> UNIX philosophy and a lover of clean, minimal interfaces. </p>
        <p className="lead">
          <Button href="https://github.com/cchanify" color="primary" target="_blank">Github</Button> {' '}
          <Button href="https://www.linkedin.com/in/connor-hanify-848063114/" color="primary" target="_blank">LinkedIn</Button>
        </p>
      </Jumbotron>
      <img height="640px" src={img} alt="crater lake" />
    </div>

  );
};

export default Home;
