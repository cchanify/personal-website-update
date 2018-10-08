import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';


class Projects extends Component {
  render() {
    return (
      <Container>
        <Col sm="12" md={{ size: 8, offset: 2 }} >
          <Row>
            <Card body outline color="secondary">
              <CardTitle>Endeavor</CardTitle>
              <CardText>A web application to track job application progress. Created with Chris Fetterolf as a semester long project for our capstone senior work in the computer science major.</CardText>
              <Button color="primary" target="_blank" href="https://endeavorapp.herokuapp.com/" >Endeavor</Button>
            </Card>
          </Row>

          <Row>
            <Card body outline color="secondary">
              <CardTitle>NASA Picture of the Day</CardTitle>
              <CardText>A small web application that utilizes a publicly available NASA API to display a different picture and description of our universe each day. Adapted for React from an online guide.</CardText>
              <Button color="primary" >Go somewhere</Button>
            </Card>
          </Row>

          <Row>
            <Card body outline color="secondary">
              <CardTitle>Todo List</CardTitle>
              <CardText>A todo list I made to learn the basics of React and Javascript.</CardText>
              <Button color="primary" target="_blank" href="https://shielded-escarpment-48287.herokuapp.com/">
              Todo App
              </Button>
            </Card>
          </Row>

          <Row>
            <Card body outline color="secondary">
              <CardTitle>Tic Tac Toe</CardTitle>
              <CardText>A small application made from the React documentation. </CardText>
              <Button color="primary" target="_blank" href="https://shielded-escarpment-48287.herokuapp.com/" >Tic Tac Toe</Button>
            </Card>
          </Row>
        </Col>
      </Container>



      /* <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Endeavor</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button target="_blank" href="https://endeavorapp.herokuapp.com/" >Endeavor</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Todo List</CardTitle>
            <CardText>A todo list application I made to learn the basic sof React and Javascript</CardText>
            <Button target="_blank" href="https://shielded-escarpment-48287.herokuapp.com/">
            TODO
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>Tic Tac Toe</CardTitle>
            <CardText>A small app from the React documentation deployed on Heroku</CardText>
            <Button target="_blank" href="https://shielded-escarpment-48287.herokuapp.com/" >Tic Tac Toe</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>NASA Picture of the Day</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row> */

    )
  }
}

export default Projects;
