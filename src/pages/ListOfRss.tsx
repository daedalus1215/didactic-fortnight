import React from 'react';
import { Link } from 'react-router-dom';

interface RssItem {
  code: string;
  name: string; 
}
interface IHome {
  feedOptions: Array<RssItem>;
}

const Home: React.FC<IHome> = ({ feedOptions }) => {
  return (
    <>
      <ul>
        {feedOptions?.map((d: any) => {
          return (
            <li key={d.code}>
              <Link to={`/${d.code}`}>{d.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
