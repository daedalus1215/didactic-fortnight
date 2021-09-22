import React from 'react';
import { IFeedTemplate } from '../../../types';
import RssPageByCode from '../rss/RssPageByCode';
import RssPageByCodeRedit from '../rss/RssPageByCodeRedit';
import styles from './RssPage.module.css';

interface IRssPage {
  feedOptions: Array<IFeedTemplate>;
  code: string;
}

const RssPage: React.FC<IRssPage> = ({ feedOptions, code }) => {
  return (
    <>
      {feedOptions
        .filter(o => o.code === code)
        .map((feedTemplate: IFeedTemplate) => {
          if (feedTemplate.rssTemplate === 'generic') {
            return <RssPageByCode code={feedTemplate.code} />;
          } else if (feedTemplate.rssTemplate === 'redit') {
            return <RssPageByCodeRedit code={feedTemplate.code} />;
          } else {
            return [];
          }
        }) || []}
    </>
  );
};

export default RssPage;
