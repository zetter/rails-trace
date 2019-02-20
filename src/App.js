import React, { Component } from 'react';
import { Grommet } from 'grommet';
import Trace from './Trace';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    const trace = this.props.trace;

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
