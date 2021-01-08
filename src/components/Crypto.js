import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Crypto = (props) => {
  return (

    <html>
      <body>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <p></p>
            </div>

            <div class="col-sm-12">
              <p>The following is a <a href="https://en.wikipedia.org/wiki/Non-fungible_token" target="_blank">non-fungible token (NFT)</a> I won as part of Chainlink's NFT <a href="ttps://docs.chain.link/docs/the-hunt" target="_blank">Treasure Hunt</a>. NFTs follow the <a href="https://eips.ethereum.org/EIPS/eip-721" target="_blank">ERC721</a> standard, which a framework for defining completely unique tokens. This property means that NFTs / ERC721s are not easily interchanged, and can be used to represent unique real world or virutal assets, such as specific parcels of land, or ownership of digital assets and art, like this friendly wizard!</p>
            </div>

            <div class="col-sm-12">
              <p></p>
            </div>

            <div class="col-sm-12">
              <nft-card contractAddress="0x8d78277bc2c63f07efc2c0c8a8512de4ad459a05" tokenId="2"> </nft-card>
            </div>
          </div>    
        </div>
      </body>
    </html>
  );
}

export default Crypto;
