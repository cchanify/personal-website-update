import React from 'react';
import { Jumbotron, Button, Container, Row, Col, CardText} from 'reactstrap';
import styled from 'styled-components';

import img from './images/crater.png';
import me from './images/me4.jpeg';
import styles from './main.css';

var imgStyle = {
  height: '10%',
};

const Home = (props) => {
  return (
    <div>
      <Container><Col><CardText></CardText><Row>
        <Jumbotron>
          <h1 className="display-3"><img height="200px" src={me} alt="me" /> Hello, world!</h1>
          <p className="lead">My name is Connor. I'm a senior computer science major at Middlebury College. </p>
          {/* <p> <img height="200px" src={me} alt="me" /> </p> */}
          <hr className="my-2" />
          <p>During my four years at Middlebury I helped captain the <a href="http://sites.middlebury.edu/ultimate/2018/06/18/middlebury-guy-pranksters-2018-season-recap/" target="_blank">Men's Ultimate Frisbee Team</a>, participated in our computer science club, MiddleEndian, and tutored students taking Data Structures and Computer Architecutre.</p>
          <p>I'm passionate about building sustainable, highly functional products that help people live better lives. My computer science coursework has been directed along a systems track. I have experience writing low level C programs and peeling back the layers of abstraction that make computers and applications work. My interests lie in security, systems, and blockchain technology, although I'm always ready to learn new things. I'm a fan of the <a href="https://www.dreamsongs.com/RiseOfWorseIsBetter.html" target="_"> Worse Is Better</a> UNIX philosophy and a lover minimalism. </p>
          <p className="lead">
            <Button href="https://github.com/cchanify" color="primary" target="_blank">Github</Button> {' '}
            <Button href="https://www.linkedin.com/in/connor-hanify-848063114/" color="primary" target="_blank">LinkedIn</Button>
          </p>
        </Jumbotron>
      </Row></Col></Container>
{/* <img height="650px" src={img} alt="crater lake" /> */}
    </div>

  );
};

export default Home;
