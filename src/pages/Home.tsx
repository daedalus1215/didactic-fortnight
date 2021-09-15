import React from 'react';
import { Link } from 'react-router-dom';

interface IHome {
  data: Array<any>;
}

const Home: React.FC<IHome> = ({ data }) => {
  return (
    <>
      <ul>
        {data?.map((d: any) => {
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
