import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import styles from './RssPageByCodeRedit.module.css';
import { IRssPage } from '../../types';

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
    <>
      <ul className={styles.ul}>
        {data?.map((d: any) => {
          return (
            <li key={d?.link} className={styles.li}>
              <a href={d?.link}>
                <img src={d.image} alt="" className={styles.img} />
                <div className={styles.text}>
                  <div className={styles.title}>{d?.title}</div>
                  <ReactMarkdown
                    className={styles.description}
                    remarkPlugins={[gfm]}
                  >
                    {d?.description}
                  </ReactMarkdown>
                  <div className={styles.pubDate}>{d.pubDate}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RssPageByCodeRedit;
