import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { IFeed } from './types';
const XMLParser = require('react-xml-parser');
const settings = require('./settings.json');

// axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const App: React.FC = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios
      .get('/api/feeds', {
        headers: {
          'Content-Type': 'application/xml',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        const feed = new window.DOMParser().parseFromString(
          resp.data,
          'text/xml'
        );
        const items = feed.querySelectorAll('item');
        const yes: Array<IFeed> = [];

        items.forEach(e => {
          yes.push({
            link: e.querySelector('link')?.innerHTML,
            title: e.querySelector('title')?.innerHTML,
            author: e.querySelector('author')?.innerHTML,
            description: e.querySelector('description')?.innerHTML,
            pubDate: e.querySelector('pubDate')?.innerHTML,
          });
        });
        // const feedItems = { ...items }.map(el => ({
        //   link: el.querySelector('link').innerHTML,
        //   title: el.querySelector('title').innerHTML,
        //   author: el.querySelector('author').innerHTML,
        // }));
        console.log('items,', yes);

        // setData(feedItems);
      });
  }, [setData]);

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
