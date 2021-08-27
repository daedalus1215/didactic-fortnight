import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
const settings = require('./settings.json');

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get(settings.url).then(async resp => {
      const feed = await resp.data;
      console.log('feed', feed)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
