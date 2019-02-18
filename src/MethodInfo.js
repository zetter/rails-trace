import React, { Component } from 'react';
import {
  Heading,
  Paragraph
} from "grommet";

import lookup from './Metadata'

class MethodInfo extends React.Component {
  render() {
    const selected = this.props.selected;
    const metadata = lookup(selected.type);
    const codeUrl = `${metadata.path}${selected.path}#L${selected.line_start}`;

    return <>
      <Heading level="2" className="name" style={{borderBottom: `10px solid ${metadata.colour}`}}>{metadata.name}</Heading>
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
      <Paragraph margin={{bottom: 'none'}}>🔎<a href={codeUrl}>{selected.path}:{selected.line_start}</a></Paragraph>
    </>
  }
}

export default MethodInfo;
