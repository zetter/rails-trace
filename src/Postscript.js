import React from 'react';
import {
  Box,
  Paragraph,
  Anchor
} from "grommet";
import { Configure } from 'grommet-icons'

import './Postscript.css'

class Postscript extends React.Component {
  render() {
    return <Box pad="large" className="postcript">
      <Configure size="large" color="#999" />
      <Paragraph size="small">Created by <Anchor href="https://chriszetter.com">Chris Zetter</Anchor> in a tribute to Rails and <Anchor href="https://contributors.rubyonrails.org/contributors">its many contributors.</Anchor></Paragraph>
      <Paragraph size="small">You can <Anchor href="http://github.com/zetter/rails-trace">see the code that powers this page</Anchor> and <Anchor href="https://github.com/zetter/rails-trace/issues/new">suggest resources to link to</Anchor> on GitHub.</Paragraph>
    </Box>
  }
}

export default Postscript;
