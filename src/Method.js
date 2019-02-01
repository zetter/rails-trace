import React, { Component } from 'react';

class Method extends Component {
  render() {
    return (
      <rect
        onClick={this.onClick}
        x={this.props.x}
        y={this.props.y * 8}
        width={this.props.width}
        height="6"
        stroke="none"
        fill="#AAA"
      />
    );
  }
}

// {"x":2,"width":2,"y":2,"path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"}
export default Method;
