import React, { Component } from 'react';
import { Card, Button, CardTitle, CardImg, CardText, Row, Col } from 'reactstrap';


class Projects extends Component {
  render() {
    return (
      <Row>
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
      </Row>

    )
  }
}

export default Projects;
