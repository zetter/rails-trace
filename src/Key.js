import React from 'react';
import {
  Text,
  Box
} from "grommet";

import { types } from './Metadata'
import './Key.css'

class Key extends React.Component {
  render() {
    const projects = Object.values(types)

    return <Box align="center">
      <table className="key">
        <tbody>
          {projects.map((project, i) => {
            return (<tr>
              <td><div className="keyColour" style={{backgroundColor: project.colour}}></div></td>
              <td><Text size="small">{project.name}</Text></td>
            </tr>)}
          )}
        </tbody>
      </table>
    </Box>
  }
}

export default Key;
