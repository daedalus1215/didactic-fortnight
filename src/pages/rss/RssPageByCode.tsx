import React from 'react';
import axios from 'axios';
import styles from '../../App.module.css';

interface IRssPage {
  code: string;
}

const RssPage: React.FC<IRssPage> = ({ code }) => {
  const [data, setData] = React.useState([]);
  console.log('data', data)
  React.useEffect(() => {
    axios
      .get(`/api/feeds?code=${code}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        console.log('response', resp.data)
        setData(resp.data.items);
      });
  }, [code, setData]);

  return (
    <>
      <div>RssPage</div>
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
    </>
  );
};

export default RssPage;
