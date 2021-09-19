import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import RssPageByCode from './pages/rss/RssPageByCode';
import Home from './pages/listOfRss/ListOfRss';
import RssPageByCodeRedit from './pages/rss/RssPageByCodeRedit';
import { IFeedTemplate } from './types';
import Main from './pages/Main';

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
          {/* <Route exact path="/">
            <Home feedOptions={feedOptions} />
          </Route> */}
          <Route 
          exact path={['/']}
          render={props => <Main feedOptions={feedOptions} {...props} />}
          />
          {/* {feedOptions.map((feedTemplate: IFeedTemplate) => {
            if (feedTemplate.rssTemplate === 'generic') {
              return (
                <Route
                  path={`/${feedTemplate.code}`}
                  render={props => (
                    <RssPageByCode code={feedTemplate.code} {...props} />
                  )}
                />
              );
            } else if (feedTemplate.rssTemplate === 'redit') {
              return (
                <Route
                  path={`/${feedTemplate.code}`}
                  render={props => (
                    <RssPageByCodeRedit code={feedTemplate.code} {...props} />
                  )}
                />
              );
            } else {
              return [];
            }
          })} */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
