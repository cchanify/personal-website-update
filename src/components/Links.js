import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Links = (props) => {
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

        <ListGroupItem tag="a" href="https://www.eff.org/files/2018/02/20/malicious_ai_report_final.pdf" target="_blank" action>
          Malicious AI Report
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://bitcoin.org/bitcoin.pdf" target="_blank" action>
          Satoshi White Paper
        </ListGroupItem>

        <ListGroupItem tag="a" href="https://web.stanford.edu/~engler/BLOC-coverity.pdf" target="_blank" action>
          Using Static Analysis to Find Bugs in the Real World
        </ListGroupItem>

      </ListGroup>
    </div>
  );
};

export default Links;
