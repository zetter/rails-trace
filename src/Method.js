import React, { Component } from 'react';
import lookup from './Metadata'

class Method extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
    this.metadata = lookup(props.traceLine.type);
  }

  onClick() {
    this.props.updateSelected(this.props.traceLine)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.selected !== nextProps.selected
  }

  render() {
    const traceLine = this.props.traceLine;
    const selected = this.props.selected;
    return (
      <rect
        onClick={this.onClick}
        x={traceLine.x}
        y={traceLine.y * 7}
        width={traceLine.width}
        height="7"
        strokeOpacity={selected ? '1' : '0.2'}
        stroke="#000"
        strokeWidth={selected ? '2' : '1'}
        fill={this.metadata.colour}
      />
    );
  }
}

// {"x":2,"width":2,"y":2,"path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"}
export default Method;
