import React from 'react';
import axios from 'axios';
import styles from '../../App.module.css';

const RssPage: React.FC = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('/api/feeds', {
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
    <ul>
      {data?.map((d: any) => {
        return (
          <li key={d?.link}>
            <span className={styles.title}>
              <a href={d?.link}>{d?.title}</a>
              {/* <span className={styles.title}>{d?.title}</span> */}
              <span className={styles.description}>{d?.description}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default RssPage;
