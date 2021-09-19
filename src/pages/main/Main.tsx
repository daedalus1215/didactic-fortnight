import React from 'react';
import { match } from 'react-router-dom';
import { IFeedTemplate } from '../../types';
import ListOfRss from '../listOfRss/ListOfRss';
import RssPage from '../rss/RssPage';
import styles from './Main.module.css';

interface IMain {
  feedOptions: Array<IFeedTemplate>;
  history: any;
  location: any;
  match: match;
}

const Main: React.FC<IMain> = props => {
  return (
    <div className={styles.main}>
      <ListOfRss feedOptions={props.feedOptions} />
      <RssPage />
    </div>
  );
};

export default Main;
