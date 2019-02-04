import React, { Component } from 'react';

class Method extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
    this.fills = {
      "gem/puma":"#ff0029",
      "gem/railties":"#377eb8",
      "gem/actionpack":"#66a61e",
      "gem/rack":"#984ea3",
      "gem/activesupport":"#00d2d5",
      "gem/activerecord":"#ff7f00",
      "gem/concurrent":"#af8d00",
      "gem/actionview":"#7f80cd",
      "gem/i18n":"#b3e900",
      "gem/arel":"#c42e60",
      "gem/sqlite3":"#a65628",
      "gem/activemodel":"#f781bf",
      "gem/sprockets":"#8dd3c7",
      "application":"#bebada",
      "standard_library":"#fb8072",
      "gem/turbolinks":"#80b1d3",
      "other":"#fdb462",
    }
  }

  onClick() {
    this.props.updateSelected(this.props.traceLine)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.selected !== nextProps.selected
  }

  fill() {
    return this.fills[this.props.traceLine.type];
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
        fill={this.fill()}
      />
    );
  }
}

// {"x":2,"width":2,"y":2,"path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"}
export default Method;
