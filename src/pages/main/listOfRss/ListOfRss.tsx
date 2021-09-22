import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './ListOfRss.module.css';

interface RssItem {
  code: string;
  name: string;
}
interface IHome {
  feedOptions: Array<RssItem>;
}

const ListOfRss: React.FC<IHome> = ({ feedOptions }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    <div
      className={cn(styles.feedOptions, {
        [styles.isExpanded]: isExpanded,
        [styles.notExpanded]: !isExpanded,
      })}
    >
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <span
          className={cn({
            'glyphicon glyphicon-list-alt': !isExpanded,
            'glyphicon glyphicon-remove': isExpanded,
          })}
        ></span>
      </div>
      <ul className={styles.ul}>
        {feedOptions?.map((d: RssItem) => {
          return (
            <li className={styles.li} key={d.code}>
              <Link to={`/${d.code}`}>{d.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfRss;
