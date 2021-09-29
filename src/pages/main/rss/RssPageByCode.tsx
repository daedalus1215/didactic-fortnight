import React from 'react';
import cn from 'classnames';
import axios from 'axios';
import { IRssPageByCode } from '../../../types';
import RssItem from './rssItem/RssItem';
import styles from './RssPageByCode.module.css';
import ReditItem from './reditItem/ReditItem';

const RssPageByCode: React.FC<IRssPageByCode> = ({
  code,
  isExpanded,
  feedOptions,
}) => {
  const [data, setData] = React.useState([]);

  const rssTemplate = feedOptions
    .filter(f => f.code === code)
    .map(f => f.rssTemplate)[0];

  React.useEffect(() => {
    if (rssTemplate === 'redit') {
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
    } else if (rssTemplate === 'generic') {
      axios
        .get(`/api/feeds?code=${code}`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(resp => {
          setData(resp.data.items);
        });
    }
  }, [code, rssTemplate, setData]);

  return (
    <div
      className={cn(styles.listWrapper, {
        [styles.listWrapperExpanded]: isExpanded,
        [styles.listWrapperNotExpanded]: !isExpanded,
      })}
    >
      <ul className={styles.ul}>
        {data?.map((rss: any) => {
          if (rssTemplate === 'generic') {
            return <RssItem rss={rss} key={rss.link} />;
          } else if (rssTemplate === 'redit') {
            return <ReditItem rss={rss} key={rss.link} />;
          } else {
            return [];
          }
        })}
      </ul>
    </div>
  );
};

export default RssPageByCode;
