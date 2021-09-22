import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import './App.css';

const App: React.FC = () => {
  const [feedOptions, setFeedOptions] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('/api/feed-list', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        setFeedOptions(resp.data.items);
      });
  }, [setFeedOptions]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path={['/', '/:code']}
            render={props => (
              <Main feedOptions={feedOptions} match={props.match} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
