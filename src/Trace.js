import React, { Component } from 'react';
import Method from './Method'

class Trace extends Component {
  render() {
    return (
      <svg width="12000" height="1000">
      {this.props.trace.map((line, i) =>
        <Method key={line.x} {...line} />
      )}
      </svg>
    );
  }
}

export default Trace;
