import React, { Component } from 'react';
import Method from './Method'
import './Trace.css'
import lookup from './Metadata'

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
    var metadata, code_url;
    if (selected) {
      metadata = lookup(selected.type);
      code_url = `${metadata.path}${selected.path}#L${selected.line_start}`;
    }

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
            <h1 className="name" style={{borderBottom: `10px solid ${metadata.colour}`}}>{metadata.name}</h1>
            <table className="info-table">
              <thead>
                <tr>
                  <th>Class / Module</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>{selected.class}</code></td>
                  <td><code>{selected.method_prefix}{selected.method}</code></td>
                </tr>
              </tbody>
            </table>
            🔎 <a href={code_url}>{selected.path}:{selected.line_start}</a>
          </div>
        }
      </>
    );
  }
}

// path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"
export default Trace;
