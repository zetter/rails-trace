import React, { Component } from 'react';
import lookup, { additionalInfo } from './Metadata'
import './Method.css'

class Method extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
    this.onFindOutMore = this.onFindOutMore.bind(this);
    this.metadata = lookup(props.traceLine.type);
    this.state = {}
  }

  onClick() {
    this.props.updateSelected(this.props.traceLine)
  }

  onFindOutMore() {
    this.props.updateFindOutMoreSelected(this.props.traceLine)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.selected !== nextProps.selected) || (this.props.findOutMoreSelected !== nextProps.findOutMoreSelected)
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
            <g className={`find-out-more ${this.props.findOutMoreSelected ? 'selected' : ''}`} onClick={this.onFindOutMore}>
              <circle className='bubble'
                cx={x}
                cy={y + 200}
                r="20"
              />
              <circle className='button'
                cx={x}
                cy={y + 200}
                r="20"
              />
              <text
                x={x - 8}
                y={y + 210}
                fontSize="30"
                fontWeight="bold"
                fill="#FFF">
                ?
              </text>
            </g>
          </>
        }
      </>
    );
  }
}

// {"x":2,"width":2,"y":2,"path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"}
export default Method;
