import React, { Component } from 'react';
import Method from './Method'
import Info from './Info'
import MethodInfo from './MethodInfo'
import FindOutMore from './FindOutMore'

import {
  Layer
} from "grommet";

import './Trace.css'
import './InfoBox.css'

class Trace extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.updateSelected = this.updateSelected.bind(this);
    this.updateFindOutMoreSelected = this.updateFindOutMoreSelected.bind(this);
  }

  updateSelected(trace){
    this.setState({selected: trace, selectedFindOutMore: null})
  }

  updateFindOutMoreSelected(trace, slug){
    this.setState({selected: null, selectedFindOutMore: trace, findOutMoreSlug: slug})
  }

  render() {
    const selected = this.state.selected;
    const selectedFindOutMore = this.state.selectedFindOutMore;
    var infoBoxContents;

    const notSelectedLines = this.props.trace.filter(traceLine => traceLine !== selected);
    const selectedLines = this.props.trace.filter(traceLine => traceLine === selected);
    const lines = notSelectedLines.concat(selectedLines);

    if (selected) {
      infoBoxContents = <MethodInfo selected={selected} />;
    } else if (selectedFindOutMore) {
      infoBoxContents = <FindOutMore slug={this.state.findOutMoreSlug} key={this.state.findOutMoreSlug} selected={selectedFindOutMore} />;
    } else {
      infoBoxContents = <p>Select a bar above to find out the method it represents</p>;
    }

    return (
      <>
        <Info/>
        <svg className="trace" width="10000" height="900">
          {lines.map((traceLine, i) =>
            <Method
              key={traceLine.x}
              updateSelected={this.updateSelected}
              traceLine={traceLine}
              selected={traceLine === selected}
              updateFindOutMoreSelected={this.updateFindOutMoreSelected}
              findOutMoreSelected={selectedFindOutMore === traceLine}
            />
          )}
        </svg>
        <Layer className="info-box" position="bottom-left" modal={false} responsive={false}>
          {infoBoxContents}
        </Layer>
      </>
    )
  }
}

// path":"<internal:prelude>","line_start":"72","line_end":"74","method":"read_nonblock","class":"Line"},{"x":5,"width":2,"y":2,"path":"/Users/zetter/.rbenv/versions/2.6.0/lib/ruby/gems/2.6.0/gems/puma-3.12.0/lib/puma/client.rb","line_start":"230","line_end":"257","method":"setup_body","class":"Line"
export default Trace;
