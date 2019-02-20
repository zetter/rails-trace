import React from 'react';
import Method from './Method'
import Info from './Info'
import MethodInfo from './MethodInfo'
import FindOutMore from './FindOutMore'
import { methodForadditionalInfoSlug } from './Metadata'
import { Link } from "react-router-dom";
import { Close } from 'grommet-icons'
import {
  Layer
} from "grommet";

import './InfoBox.css'

class Trace extends React.Component {

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
    }

    return (
      <>
        <Info/>
        <div className="trace">
          <svg width="6200" height="640">
            {this.methodsWithSelectedLast().map((method, i) =>
              <Method
                key={method.key}
                method={method}
                selected={method === selectedMethod}
                findOutMoreSelected={method === selectedFindOutMoreMethod}
              />
            )}
          </svg>
        </div>
        {infoBoxContents && (
          <Layer className="info-box" position="bottom-left" modal={false} responsive={false}>
            <Link title="Close" to="/" className="close"><Close size="20px"/></Link>
            {infoBoxContents}
          </Layer>
        )}
      </>
    )
  }
}

export default Trace;
