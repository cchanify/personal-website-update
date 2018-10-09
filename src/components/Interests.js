import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Interests = (props) => {
  return (
    <div>
      <p>   </p>
      <h6>


      </h6>
      <ListGroup>

        <ListGroupItem tag="a" href="https://defcon.org/images/defcon-26/DEF%20CON%2026%20voting%20village%20report.pdf" target="_blank" action>
          DEF CON 26 Voting Village
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://www.youtube.com/watch?v=L0KuAx1COEk" target="_blank" action>
          MIT Pathway to Fusion Energy (IAP 2017) - Zach Hartwig
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://bitcoin.org/bitcoin.pdf" target="_blank" action>
          Satoshi White Paper
        </ListGroupItem>

      </ListGroup>
    </div>
  );
};

export default Interests;
