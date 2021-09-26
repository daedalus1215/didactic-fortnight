import React from 'react';
import DOMPurify from 'dompurify';
import { IRssItem } from '../../../../types';
import styles from './ReditItem.module.css';

const ReditItem: React.FC<IRssItem> = ({ rss }) => {
  const { link, image, title, description, pubDate } = rss;
  console.log('reditItem', 'ReditItem');
  return (
    <li key={link} className={styles.li}>
      <a href={link}>
        {image ? (
          <img src={image} alt="" className={styles.img} />
        ) : (
          <div className={styles.imgPlaceholder}></div>
        )}
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>
            {DOMPurify.sanitize(description, {
              ALLOWED_TAGS: ['b'],
            })}
          </div>
          <div className={styles.pubDate}>{pubDate}</div>
        </div>
      </a>
    </li>
  );
};

export default ReditItem;
