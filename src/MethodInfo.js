import React from 'react';
import {
  Heading,
  Paragraph,
  Anchor,
  Text
} from "grommet";
import { DocumentText } from 'grommet-icons';

import lookup from './Metadata'

class MethodInfo extends React.Component {
  render() {
    const selected = this.props.selected;
    const metadata = lookup(selected.type);
    const codeUrl = `${metadata.path}${selected.path}#L${selected.line_start}`;
    const codePath = `${selected.path}:${selected.line_start}`;

    return <>
      <Heading level="2" className="name" style={{borderBottomColor: `${metadata.colour}`}}>{metadata.name}</Heading>
      <table className="info-table">
        <thead>
          <tr>
            <th><Text size="xsmall">Class / Module</Text></th>
            <th><Text size="xsmall">Method</Text></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Text><code>{selected.class}</code></Text></td>
            <td><Text><code>{selected.name}</code></Text></td>
          </tr>
        </tbody>
      </table>
      <Paragraph margin={{bottom: 'none'}}>
        <Anchor icon={<DocumentText size="22px"/>} size="small" href={codeUrl} label={codePath} />
      </Paragraph>
    </>
  }
}

export default MethodInfo;
