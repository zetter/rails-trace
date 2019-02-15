import React, { Component } from 'react';
import lookup, { additionalInfo } from './Metadata'
import './Method.css'

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

    const info = additionalInfo(traceLine.class, traceLine.method)

    return (
      <>
        <rect
          onClick={this.onClick}
          x={traceLine.x}
          y={traceLine.y * 7}
          width={traceLine.width}
          height="7"
          className={`method ${selected ? 'selected' : ''}`}
          fill={this.metadata.colour}
        />
        {info &&
          <>
            <line
              x1={traceLine.x}
              y1={traceLine.y * 7 + 3}
              x2={traceLine.x}
              y2={traceLine.y * 7 + 200}
              stroke="#444"
            />
            <circle
              cx={traceLine.x}
              cy={traceLine.y * 7 + 200}
              r="20"
              fill="#444"
            />
            <text
              x={traceLine.x - 8}
              y={traceLine.y * 7 + 210}
              font-size="30"
              font-weight="bold"
              fill="#FFF">
              ?
            </text>
          </>
        }
      </>
    );
  }
}

// {"x":2,"width":2,"y":2,"path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"}
export default Method;
