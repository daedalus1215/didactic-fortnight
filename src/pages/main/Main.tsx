import React, { useState } from 'react';
import { match } from 'react-router-dom';
import { IFeedTemplate } from '../../types';
import ListOfRss from './listOfRss/RssTemplateListView';
import RssPage from './rss/RssPage';
import styles from './Main.module.css';
import Navbar from './navbar/Navbar';
interface IMain {
  feedOptions: Array<IFeedTemplate>;
  match: {
    params: {
      code?: string;
    };
  };
}

const Main: React.FC<IMain> = ({ feedOptions, match }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const code = match?.params?.code || 'unknown';

  return (
    <div className={styles.main}>
      <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={styles.body}>
        <ListOfRss
          feedOptions={feedOptions}
          isExpanded={isExpanded}
        />
        <RssPage
          feedOptions={feedOptions}
          code={code}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};

export default Main;
