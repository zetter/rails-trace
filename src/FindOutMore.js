import React, { Component } from 'react';
import {
  Markdown,
  Box
} from "grommet";

import './Info.css'
import lookup from './Metadata'

class FindOutMore extends React.Component {
  state = {};

  componentDidMount() {
    fetch(this.contentURL())
      .then(response => response.text())
      .then(markdown => this.setState({markdown: markdown}));
  }

  contentURL() {
    const selected = this.props.selected;
    const key = `${selected.class}-${selected.method}`.toLowerCase().replace(/[^a-z_-]/g, "-");
    return `/find-out-more/${key}.md`
  }

  render() {
    if (this.state.markdown) {
      return <Markdown>{this.state.markdown}</Markdown>
    } else {
      return <Box align="center">Loading</Box>
    }
  }
}

export default FindOutMore;
