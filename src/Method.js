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
    const x = traceLine.x + 40
    const y = traceLine.y * 7

    return (
      <>
        <rect
          onClick={this.onClick}
          x={x}
          y={y}
          width={traceLine.width}
          height="7"
          className={`method ${selected ? 'selected' : ''}`}
          fill={this.metadata.colour}
        />
        {info &&
          <>
            <line
              x1={x}
              y1={y + 3}
              x2={x}
              y2={y + 200}
              stroke="#444"
            />
            <circle
              cx={x}
              cy={y + 200}
              r="20"
              fill="#444"
            />
            <text
              x={x - 8}
              y={y + 210}
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
