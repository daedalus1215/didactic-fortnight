import React from 'react';
import axios from 'axios';
import './App.css';
import { IFeed } from './types';

// axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const App: React.FC = () => {
  const [data, setData] = React.useState([]);
  console.log('data', data)
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
    <div className="App">
      <ul>
        {data.map((d:any) => {
          return <li>{d.name}</li>
        })}
      </ul>
    </div>
  ); 
};

export default App;
