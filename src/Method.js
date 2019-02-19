import React, { Component } from 'react';
import lookup, { additionalInfoSlug } from './Metadata'
import './Method.css'
import { Link } from "react-router-dom";

class Method extends Component {
  constructor(props) {
    super(props)
    this.metadata = lookup(props.traceLine.type);
    this.state = {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.selected !== nextProps.selected) || (this.props.findOutMoreSelected !== nextProps.findOutMoreSelected)
  }

  render() {
    const traceLine = this.props.traceLine;
    const selected = this.props.selected;

    const info = additionalInfoSlug(traceLine.class, traceLine.method)
    const x = traceLine.x + 40
    const y = traceLine.y * 7

    return (
      <>
        <Link to={`/method/${traceLine.x}`}>
          <rect
            x={x}
            y={y}
            width={traceLine.width}
            height="7"
            className={`method ${selected ? 'selected' : ''}`}
            fill={this.metadata.colour}
          />
        </Link>
        {info &&
          <>
            <line
              x1={x}
              y1={y + 3}
              x2={x}
              y2={y + 120}
              stroke="#444"
            />
            <Link to={`/find-out-more/${traceLine.x}`} className={`find-out-more ${this.props.findOutMoreSelected ? 'selected' : ''}`}>
              <circle className='bubble'
                cx={x}
                cy={y + 120}
                r="20"
              />
              <circle className='button'
                cx={x}
                cy={y + 120}
                r="20"
              />
              <text
                x={x - 8}
                y={y + 120 + 10}
                fontSize="30"
                fontWeight="bold"
                fill="#FFF">
                ?
              </text>
            </Link>
          </>
        }
      </>
    );
  }
}

// {"x":2,"width":2,"y":2,"path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"}
export default Method;
