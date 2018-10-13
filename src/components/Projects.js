import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <Container>
        <CardText>   </CardText>
        <Row>
          <Col>
            <Card body outline color="secondary">
              <CardTitle>Endeavor</CardTitle>
              <CardText>A web application to track job application progress. Created with Chris Fetterolf as a semester long project for our capstone senior work in the computer science major.</CardText>
              <Button color="primary" target="_blank" href="https://endeavorapp.herokuapp.com/">Endeavor</Button>
            </Card>
          </Col>

          <Col>
            <Card body outline color="secondary">
              <CardTitle>NASA Picture of the Day</CardTitle>
              <CardText>A small web application that utilizes a publicly available NASA API to display a different picture and description of our universe each day. Adapted for create-react-app from an online guide.</CardText>
              <Button href="https://nasa-picoftheday.herokuapp.com/" target="_blank" color="primary">The Universe</Button>
            </Card>
          </Col>
        </Row>
        <CardText>   </CardText>
        <Row>
          <Col>
            <Card body outline color="secondary">
              <CardTitle>Todo List</CardTitle>
              <CardText>A todo list I made to learn the basics of React and Javascript.</CardText>
              <Button color="primary" target="_blank" href="https://shielded-escarpment-48287.herokuapp.com/">
              Todo App
              </Button>
            </Card>
          </Col>

          <Col>
            <Card body outline color="secondary">
              <CardTitle>Tic Tac Toe</CardTitle>
              <CardText>A small application made from the React documentation. </CardText>
              <Button color="primary" target="_blank" href="https://blooming-depths-87074.herokuapp.com/" >Tic Tac Toe</Button>
            </Card>
          </Col>
        </Row>
        <CardText>   </CardText>
        <Row>
          <Col>
            <Card body outline color="secondary">
              <CardTitle>SpaceX Upcoming Launch</CardTitle>
              <CardText>A web application made to display information about SpaceX flights, rockets, and launches. Utilizes React, CRA, reactstrap and the SpaceX API.</CardText>
              <Button href="https://spacex-api1.herokuapp.com/" target="_blank" color="primary">SpaceX</Button>
            </Card>
          </Col>

          <Col>

          </Col>
        </Row>

      </Container>



      // <Container>
      //   <Col sm="12" md={{ size: 8, offset: 2 }} >
      //       <CardText>   </CardText>
      //     <Row>
      //       <Card body outline color="secondary">
      //         <CardTitle>Endeavor</CardTitle>
      //         <CardText>A web application to track job application progress. Created with Chris Fetterolf as a semester long project for our capstone senior work in the computer science major.</CardText>
      //         <Button color="primary" target="_blank" href="https://endeavorapp.herokuapp.com/">Endeavor</Button>
      //       </Card>
      //     </Row>
      //       <CardText>   </CardText>
      //     <Row>
      //       <Card body outline color="secondary">
      //         <CardTitle>NASA Picture of the Day</CardTitle>
      //         <CardText>A small web application that utilizes a publicly available NASA API to display a different picture and description of our universe each day. Adapted for React from an online guide.</CardText>
      //         <Button href="https://dashboard.heroku.com/apps/nasa-picoftheday" target="_blank" color="primary">The Universe</Button>
      //       </Card>
      //     </Row>
      //       <CardText>   </CardText>
      //     <Row>
      //       <Card body outline color="secondary">
      //         <CardTitle>Todo List</CardTitle>
      //         <CardText>A todo list I made to learn the basics of React and Javascript.</CardText>
      //         <Button color="primary" target="_blank" href="https://shielded-escarpment-48287.herokuapp.com/">
      //         Todo App
      //         </Button>
      //       </Card>
      //     </Row>
      //       <CardText>   </CardText>
      //     <Row>
      //       <Card body outline color="secondary">
      //         <CardTitle>Tic Tac Toe</CardTitle>
      //         <CardText>A small application made from the React documentation. </CardText>
      //         <Button color="primary" target="_blank" href="https://blooming-depths-87074.herokuapp.com/" >Tic Tac Toe</Button>
      //       </Card>
      //     </Row>
      //   </Col>
      // </Container>
    )
  }
}

export default Projects;
