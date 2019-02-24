import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Heading,
  Paragraph,
  Anchor
} from "grommet";

import { Link } from 'react-router-dom'
import { FastForward } from 'grommet-icons'

import './Info.css'

class Info extends React.Component {
  render() {
    return <Box pad="medium" className="info">
      <Heading size="small" level="1" margin="0">Rails Trace</Heading>
      <Tabs margin="0" justify="start" className="tabs">
        <Tab title="About">
          <Box pad="none">
            <Paragraph>
              What code runs when you request a page from a Ruby on Rails application?
            </Paragraph>
            <Paragraph>
              Here is an annotated trace showing every method call within Rails and it's dependencies.
              It is for <Anchor href="https://github.com/zetter/example-blog">an example application</Anchor> that loads a blog post from the database and renders a page containing the post's title.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="What it shows">
          <Box pad="none">
            <Paragraph>
              This shows every one of the <strong>2041</strong> Ruby methods called by a Rails 5.2.2 server running in production mode while it responded to a HTTP request. These method calls were captured using the <Anchor href="https://ruby-doc.org/core-2.6/TracePoint.html">TracePoint class</Anchor>. Methods are colour-coded based on which Ruby Gem they are part of.
            </Paragraph>
            <Paragraph>
              <Anchor href="http://www.brendangregg.com/flamegraphs.html">Flame & icicle graphs</Anchor> like this are often scaled to execution time to make it possible to spot performance problems. This graph is scaled so you can see every method invocation so it's easier to follow how Rails works.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="What it doesn't show">
          <Box pad="none">
            <Paragraph>
              The trace does not show how a Rails server starts. It also doesn't show some processes that Rails caches between requests such as processing the database schema or compiling view templates- showing all these too would make the trace much longer.
            </Paragraph>
            <Paragraph>
              The execution of Ruby blocks, which pass the control flow to a previous point in the stack, are not shown.
              Much of the Ruby Standard Library is written in C including the <code>String</code> and <code>Array</code> classes. Calls to these and other C-functions are not shown.
            </Paragraph>
          </Box>
        </Tab>
      </Tabs>


      <div className="showKey">
        <Link to="/key">Show key</Link>
      </div>
      <div className="scrollToSee">
        <span>Scroll to see the trace</span><FastForward color="#888"/>
      </div>
    </Box>
  }
}

export default Info;
