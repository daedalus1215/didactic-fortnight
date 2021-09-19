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
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={cn(styles.feedOptions, {
        [styles.isExpanded]: isExpanded,
        [styles.notExpanded]: !isExpanded,
      })}
    >
      <ul>
        {feedOptions?.map((d: RssItem) => {
          return (
            <li key={d.code}>
              <Link to={`/${d.code}`}>{d.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfRss;
