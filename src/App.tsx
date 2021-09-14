import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import RssPageByCode from './pages/rss/RssPageByCode';
import Home from './pages/Home';

// axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const App: React.FC = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('/api/feed-list', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        setData(resp.data.items);
      });
  }, [setData]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          {data.map((d: any) => {
           return <Route
              path={`/${d.code}`}
              render={props => <RssPageByCode code={d.code} {...props} />}
            />;
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
