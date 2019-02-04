import React, { Component } from 'react';
import Method from './Method'
import './Trace.css'

class Trace extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(trace){
    this.setState({selected: trace})
  }

  render() {
    const selected = this.state.selected;
    return (
      <>
        <svg width="102000" height="1000">
        {this.props.trace.map((traceLine, i) =>
          <Method
            key={traceLine.x}
            updateSelected={this.updateSelected}
            traceLine={traceLine}
            selected={traceLine.x === (selected && selected.x)}
          />
        )}
        </svg>

        {selected &&
          <div className="info-box">
            {selected.path}:{selected.line_start}<br/>
            {selected.class}<br/>
            {selected.method}<br/>
          </div>
        }
      </>
    );
  }
}

// path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"
export default Trace;
