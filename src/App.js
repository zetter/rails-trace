import React, { Component } from 'react';
import { Grommet } from 'grommet';
import Trace from './Trace';
import Info from './Info'
import Postscript from './Postscript'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    const trace = this.props.trace;

    return (
      <Router>
        <Grommet plain className="container">
          <Info/>
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
          <Route exact
            path="/key"
            render={({match}) => <Trace trace={trace} mode="key"/>}
          />
          <Postscript/>
        </Grommet>
      </Router>
    );
  }
}

export default App;
