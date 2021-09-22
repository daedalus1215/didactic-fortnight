import React from 'react';
import { match } from 'react-router-dom';
import { IFeedTemplate } from '../../types';
import ListOfRss from './listOfRss/ListOfRss';
import RssPage from './rss/RssPage';
import styles from './Main.module.css';
interface IMain {
  feedOptions: Array<IFeedTemplate>;
  match: {
    params: {
      code?: string;
    };
  };
}

const Main: React.FC<IMain> = ({ feedOptions, match }) => {
  const code = match?.params?.code || 'unknown';
  return (
    <div className={styles.main}>
      <ListOfRss feedOptions={feedOptions} />
      <RssPage feedOptions={feedOptions} code={code} />
    </div>
  );
};

export default Main;
