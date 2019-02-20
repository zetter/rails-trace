import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Heading,
  Paragraph
} from "grommet";

import './Info.css'

class Info extends React.Component {
  state = { open: true };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    return <Box pad="medium" className="info">
      <Tabs>
        <Tab title="About">
          <Box pad="medium">
            <Heading margin="none">Rails Trace</Heading>
            <Paragraph>
              Have you ever wanted to know what happens when you request a page from a Ruby on Rails application?
            </Paragraph>
            <Paragraph>
              Here you can follow every method call from the HTTP server, through Rack and into the Rails framework and to your application code.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="What does it show?">
          <Box pad="medium">
            <Paragraph>
              This shows every method called on for a Ruby on Rails Rails Server running in the production environment for a simple application.
            </Paragraph>
            <Paragraph>
              Flame & icicle graphs are often scaled to execution time to make it easier to spot performance problems. This graph is scaled so you can see every method invocation so it's easier to see how Rails works.
            </Paragraph>
            <Paragraph>
              The execution of Ruby blocks, which pass the control flow to a previous point in the stack, are not shown. Much of the Ruby Standard Libary is written in C including the <code>String</code> and <code>Array</code> classes and calls to these and other C-functions are not shown either.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="How was it made?">
          <Box pad="medium">
            <Paragraph>
              The execution of Ruby blocks, which pass the control flow to a previous point in the stack, are not shown. Much of the Ruby Standard Libary is written in C including the <code>String</code> and <code>Array</code> classes and calls to these and other C-functions are not shown either.
            </Paragraph>
          </Box>
        </Tab>
      </Tabs>
    </Box>
  }
}

export default Info;
