import React from 'react';
import axios from 'axios';
import { IRssPage } from '../../../types';
import styles from './RssPageByCode.module.css';

const RssPageByCode: React.FC<IRssPage> = ({ code }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/api/feeds?code=${code}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        // console.log('response', resp.data);
        setData(resp.data.items);
      });
  }, [code, setData]);

  return (
      <ul className={styles.ul}>
        {data?.map((d: any) => {
          return (
            <li key={d?.link} className={styles.li}>
              <a href={d?.link}>
                <img src={d.image} alt="" className={styles.img} />
                <div className={styles.text}>
                  <div className={styles.title}>{d?.title}</div>
                  <div className={styles.description}>{d?.description}</div>
                  <div className={styles.pubDate}>{d.pubDate}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
  );
};

export default RssPageByCode;
