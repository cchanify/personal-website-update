import React from 'react';
import { Jumbotron, Button, Container, Row, Col, CardText} from 'reactstrap';
//import styled from 'styled-components';

import img from './images/crater.png';
import me from './images/me.jpeg';
import resume from './res.pdf';

const Home = (props) => {
  return (
    <div>
      <Container><Col><CardText></CardText><Row>
        <Jumbotron>
          <h1 className="display-3"><img height="200px" src={me} alt="me" /> Hello, world!</h1>
          <p className="lead">My name is Connor. I work as a cyber security consultant at Stroz Friedberg, specializing in digital forensics and incident reponse. </p>
          {/* <p> <img height="200px" src={me} alt="me" /> </p> */}
          <hr className="my-2" />

          <p>Prior to this I participated in the firms security rotational program, granting exposure to a variety of security related disciplines, including security advisory services and penetration testing. I graduated from Middlebury College in 2019 with a Computer Science degree and Political Philosophy minor. During my four years at Middlebury I captained the <a href="http://sites.middlebury.edu/ultimate/2018/06/18/middlebury-guy-pranksters-2018-season-recap/" target="_blank">Men's Ultimate Frisbee Team</a>, participated in our computer science club, MiddleEndian, and tutored CS students.</p>

          <p>I'm interested in technology, especially in products that help people live better. I am particularly curious about security, blockchain, biotech, and renewable energy, although I'm always ready to learn new things. I'm a fan of the <a href="https://www.dreamsongs.com/RiseOfWorseIsBetter.html" target="_"> Worse Is Better</a> UNIX philosophy and a lover of minimalism.</p>

          <p>In my free time, I like to <a href="https://www.strava.com/athletes/chanify" target="_blank">bike, swim, and run</a>.
          </p>

          <p className="lead">
            <Button href="https://github.com/cchanify" color="primary" target="_blank">Github</Button> {' '}
            <Button href="https://www.linkedin.com/in/connor-hanify-848063114/" color="primary" target="_blank">LinkedIn</Button> {' '}
            {/* <Button href={resume} width="800px" height="2100px"  color="primary" target="_blank">Resume</Button> */}
          </p>
        </Jumbotron>
      </Row></Col></Container>
    </div>

  );
};

// {/* <h1 className="display-3"><img height="200px" src={me} alt="me" /> Hello, world!</h1>
// <p className="lead">My name is Connor. I'm a recent graduate of Middlebury College where I studied Computer Science and Political Philosophy. </p>
// {/* <p> <img height="200px" src={me} alt="me" /> </p> */}
// <hr className="my-2" />
// <p>During my four years at Middlebury I helped captain the <a href="http://sites.middlebury.edu/ultimate/2018/06/18/middlebury-guy-pranksters-2018-season-recap/" target="_blank">Men's Ultimate Frisbee Team</a>, participated in our computer science club, MiddleEndian, and tutored students taking Data Structures and Computer Architecutre.</p>
// <p>I'm interested in technology, especially in products that help people live better lives. My computer science coursework at Middlebury was focused on systems track. I have experience writing low level C programs and peeling back the layers of abstraction that make computers and applications work. My interests lie in security, systems, web3 and blockchain technology, although I'm always ready to learn new things. I'm a fan of the <a href="https://www.dreamsongs.com/RiseOfWorseIsBetter.html" target="_"> Worse Is Better</a> UNIX philosophy and a lover of minimalism.</p> */}

export default Home;
