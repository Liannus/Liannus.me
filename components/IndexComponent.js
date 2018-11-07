import React from 'react';
import { Row, Col } from 'reactstrap';
import BackgroundVideo from './partials/BackgroundVideo.js'
import '../style.css'
import ForestFire from 'forestfiresim';

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col style={{ "background-color": "black"}} className="dd" sm="12">
            <h1>hello</h1>
            <ForestFire />
          </Col>
          <Col className="dd" sm="12">
            <BackgroundVideo />
          </Col>
          <footer>
          </footer>
        </Row>
      </div>
    );
  }
}
