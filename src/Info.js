import React, { Component } from 'react';
import {
  Box,
  Tab,
  Tabs,
  Layer
} from "grommet";


class Info extends React.Component {
  state = { open: true };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const open = this.state.open;
    if (open) {
      return (
        <Layer
          position="center"
          modal
          onClickOutside={this.onClose}
          onEsc={this.onClose}>
          <Box pad="medium">
          <Tabs>
            <Tab title="About">
              <Box pad="medium">One</Box>
            </Tab>
            <Tab title="tab 2">
              <Box pad="medium">Two</Box>
            </Tab>
          </Tabs>
          </Box>
        </Layer>
      )
    } else {
      return null
    }
  }
}

export default Info;
