import React from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import styles from './RssPageByCodeRedit.module.css';
import { IRssPage } from '../../../types';

const RssPageByCodeRedit: React.FC<IRssPage> = ({ code }) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`/api/redit-feeds?code=${code}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        setData(resp.data.items);
      });
  }, [code, setData]);

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.ul}>
        {data?.map((d: any) => {
          return (
            <li key={d?.link} className={styles.li}>
              <a href={d?.link}>
                {d?.image ? (
                  <img src={d?.image} alt="" className={styles.img} />
                ) : (
                  <div className={styles.imgPlaceholder}></div>
                )}
                <div className={styles.text}>
                  <div className={styles.title}>{d?.title}</div>
                  <div className={styles.description}>
                    {DOMPurify.sanitize(d?.description, {
                      ALLOWED_TAGS: ['b'],
                    })}
                  </div>
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

export default RssPageByCodeRedit;