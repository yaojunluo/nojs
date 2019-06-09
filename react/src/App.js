import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import httpTest from './basic/http'
import './assets/css/App.css';

import routes from './route/route'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  httpTest.init();
  return (
    <Router>
      <div className="App">
      {routes.map((route, i) => {
        if(route.exact){
          return (
            <Route
              key={i}
              exact
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          )
        }else{
          return (
            <Route
              key={i}
              path={route.path}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          )
        }

      })}
      </div>
    </Router>
  );
}

export default App;
