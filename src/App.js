import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import './App.css';
import EmployeeView from './EmployeeView/EmployeeView';
import Benefits from './Benefits/Benefits';
import Settings from './Settings/Settings';
import EmployeeDetail from './EmployeeDetail/EmployeeDetail';
import NotFound from './NotFound/NotFound';

function App(props) {
  const store = props.store;
  return (
      <div className="app">
        <h1>
          <Link to={`/`}>ABC-Company</Link>
        </h1>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/employees" render={(props) => <EmployeeView {...props} store={store}/>} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/settings" component={Settings} />
            <Route 
              path="/employees/:name" 
              render={(props) => <EmployeeDetail {...props}/>} />
            <Route component={NotFound} />
        </Switch>
      </div>
  );
}
export default App;