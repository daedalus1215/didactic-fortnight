import React from 'react';
import cn from 'classnames';
import axios from 'axios';
import { IRssPageByCode } from '../../../types';
import RssItem from './rssItem/RssItem';
import ReditItem from './reditItem/ReditItem';
import styles from './RssPageByCode.module.css';

const RssPageByCode: React.FC<IRssPageByCode> = ({
  feedTemplate,
  isExpanded,
}) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (feedTemplate.rssTemplate === 'redit') {
      axios
        .get(`/api/redit-feeds?code=${feedTemplate.code}`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(resp => {
          setData(resp.data.items);
        });
    } else if (feedTemplate.rssTemplate === 'generic') {
      axios
        .get(`/api/feeds?code=${feedTemplate.code}`, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(resp => {
          setData(resp.data.items);
        });
    }
  }, [feedTemplate, setData]);

  return (
    <div
      className={cn(styles.listWrapper, {
        [styles.listWrapperExpanded]: isExpanded,
        [styles.listWrapperNotExpanded]: !isExpanded,
      })}
    >
      <ul className={styles.ul}>
        {data?.map((rss: any) => {
          if (feedTemplate.rssTemplate === 'generic') {
            return <RssItem rss={rss} key={rss.link} />;
          } else if (feedTemplate.rssTemplate === 'redit') {
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
