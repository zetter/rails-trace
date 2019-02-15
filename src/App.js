import React, { Component } from 'react';
import { Grommet } from 'grommet';
import Trace from './Trace';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { trace: [] };
  }

  componentDidMount() {
    fetch('/trace.json')
      .then(response => response.json())
      .then(data => this.setState({trace: data}));
  }

  render() {
    return (
      <Grommet plain className="container">
        <Trace trace={this.state.trace}/>
      </Grommet>
    );
  }
}

export default App;
