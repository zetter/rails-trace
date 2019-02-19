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

  selectedMethod() {
    return this.props.trace.find(method => method.key === this.props.slug);
  }

  selectedFindOutMoreMethod() {
    const selectedFindOutMoreMethodKey = methodForadditionalInfoSlug(this.props.slug)
    return this.props.trace.find(method => method.key === selectedFindOutMoreMethodKey);
  }

  methodsWithSelectedLast() {
    const selected = this.selectedMethod();
    if (selected) {
      const notSelectedLines = this.props.trace.filter(method => method !== selected);
      return notSelectedLines.concat([selected]);
    } else {
      return this.props.trace;
    }
  }

  render() {
    const selectedMethod = this.selectedMethod();
    const selectedFindOutMoreMethod = this.selectedFindOutMoreMethod();
    var infoBoxContents;

    if (this.props.mode === 'method') {
      infoBoxContents = <MethodInfo selected={selectedMethod} />;
    } else if (this.props.mode === 'find-out-more') {
      infoBoxContents = <FindOutMore slug={this.props.slug} key={this.props.slug} selected={selectedFindOutMoreMethod} />;
    } else {
      infoBoxContents = <p>Select a bar above to find out the method it represents</p>;
    }

    return (
      <>
        <Info/>
        <svg className="trace" width="10000" height="900">
          {this.methodsWithSelectedLast().map((method, i) =>
            <Method
              key={method.key}
              method={method}
              selected={method === selectedMethod}
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
