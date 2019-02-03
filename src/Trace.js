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
    console.log(this.state.selected)
    return (
      <>
        <svg width="102000" height="1000">
        {this.props.trace.map((traceLine, i) =>
          <Method key={traceLine.x} updateSelected={this.updateSelected} traceLine={traceLine} />
        )}
        </svg>

        {selected &&
          <div className="info-box">
            {this.state.selected.x}
          </div>
        }
      </>
    );
  }
}

export default Trace;
