import React, { Component } from 'react';
import { Grommet } from 'grommet';
import Trace from './Trace';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
    const trace = this.state.trace;

    if (this.state.trace.length === 0) {
      return <h1>Loading</h1>;
    }

    return (
      <Router>
        <Grommet plain className="container">
          <Route exact
            path="/"
            render={({match}) => <Trace trace={trace} />}
          />
          <Route exact
            path="/method/:slug"
            render={({match}) => <Trace trace={trace} mode="method" slug={match.params.slug} />}
            />
          <Route exact
            path="/find-out-more/:slug"
            render={({match}) => <Trace trace={trace} mode="find-out-more" slug={match.params.slug} />}
          />
        </Grommet>
      </Router>
    );
  }
}

export default App;
