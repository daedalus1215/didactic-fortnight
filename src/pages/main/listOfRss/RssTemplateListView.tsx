import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './RssTemplateListView.module.css';

interface RssItem {
  code: string;
  name: string;
}
interface IHome {
  feedOptions: Array<RssItem>;
  isExpanded: boolean;
  setIsExpanded: (boolean:boolean) => void;
}

const ListOfRss: React.FC<IHome> = ({
  feedOptions,
  isExpanded,
  setIsExpanded,
}) => {
  return (
    <div
      className={cn(styles.feedOptions, {
        [styles.isExpanded]: isExpanded,
        [styles.notExpanded]: !isExpanded,
      })}
    >
      <ul
        className={cn(styles.ul, {
          [styles.none]: !isExpanded,
        })}
      >
        {feedOptions?.map((d: RssItem) => {
          return (
            <li
              className={styles.li}
              key={d.code}
              onClick={() => setIsExpanded(false)}
            >
              <Link to={`/${d.code}`}>{d.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfRss;
