import React, {Component} from 'react';
import Dygraph from 'dygraphs';
import '../css/graph.css';
import data from '../data/sample-data';
import { graphConfig } from '../data/graph-config';

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      config: graphConfig,
      data: function () {
        data.forEach((item) => {
          item[0] = Date.parse(item[0]);
        });

        return data;
      }
    };
  }

  componentDidMount() {
    new Dygraph(
      this.refs.graph,
      this.state.data(),
      this.state.config()
    );
  }

  render () {
    return (
      <div className="graph">
        <div className="graph__elem" ref="graph"></div>
        <div className="graph__legend"></div>
      </div>
    );
  }
}

export default Graph;
