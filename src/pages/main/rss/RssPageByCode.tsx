import React from 'react';
import cn from 'classnames';
import axios from 'axios';
import { IRssPageByCode } from '../../../types';
import styles from './RssPageByCode.module.css';

const RssPageByCode: React.FC<IRssPageByCode> = ({ code, isExpanded }) => {
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
    <div className={cn(styles.listWrapper, { 'flex 1': isExpanded })}>
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
    </div>
  );
};

export default RssPageByCode;
