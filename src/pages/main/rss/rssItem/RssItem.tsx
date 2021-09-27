import React from 'react';
import { IRssItem } from '../../../../types';
import styles from './RssItem.module.css';

const RssItem: React.FC<IRssItem> = ({ rss }) => {
  const { image, title, description, pubDate, link } = rss;
  return (
    <li key={styles.link} className={styles.li}>
      <a href={link}>
        <img src={image} alt="" className={styles.img} />
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.pubDate}>{pubDate}</div>
        </div>
      </a>
    </li>
  );
};

export default RssItem;
