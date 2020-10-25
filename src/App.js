import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import MultiCharts from './containers/MultiCharts/MultiCharts';
import LineChart from './containers/LineChart/LineChart';
//import ArrivalTourists from './containers/ArrivalTourists/ArrivalTourists';
import Introduction from './components/Content/Introduction/Introduction';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
              <Route path="/multiplecharts" component={MultiCharts}/>
              <Route path="/linechart" component={LineChart}/>
              <Route path="/" exact component={Introduction}/>
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
