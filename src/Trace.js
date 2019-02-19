import React, { Component } from 'react';
import Method from './Method'
import Info from './Info'
import MethodInfo from './MethodInfo'
import FindOutMore from './FindOutMore'
import { additionalInfoSlugForMethod, methodForadditionalInfoSlug } from './Metadata'

import {
  Layer
} from "grommet";

import './Trace.css'
import './InfoBox.css'

class Trace extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var infoBoxContents, selected, selectedFindOutMoreMethod;

    if (this.props.mode === 'method') {
      selected = this.props.trace.find(method => method.key === this.props.slug);
      infoBoxContents = <MethodInfo selected={selected} />;
    } else if (this.props.mode === 'find-out-more') {
      const selectedFindOutMoreMethodKey = methodForadditionalInfoSlug(this.props.slug)
      selectedFindOutMoreMethod = this.props.trace.find(method => method.key === selectedFindOutMoreMethodKey);
      infoBoxContents = <FindOutMore slug={this.props.slug} key={this.props.slug} selected={selectedFindOutMoreMethod} />;
    } else {
      infoBoxContents = <p>Select a bar above to find out the method it represents</p>;
    }

    const notSelectedLines = this.props.trace.filter(method => method !== selected);
    const selectedLines = this.props.trace.filter(method => method === selected);
    const lines = notSelectedLines.concat(selectedLines);

    return (
      <>
        <Info/>
        <svg className="trace" width="10000" height="900">
          {lines.map((method, i) =>
            <Method
              key={method.key}
              method={method}
              selected={method === selected}
              findOutMoreSelected={method === selectedFindOutMoreMethod}
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
