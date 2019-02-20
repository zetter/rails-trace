import React from 'react';
import {
  Markdown,
  Box
} from "grommet";

import './Info.css'

class FindOutMore extends React.Component {
  state = {};

  componentDidMount() {
    fetch(this.contentURL())
      .then(response => response.text())
      .then(markdown => this.setState({markdown: markdown}));
  }

  contentURL() {
    return `/find-out-more/${this.props.slug}.md`
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
