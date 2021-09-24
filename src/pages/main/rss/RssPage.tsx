import React from 'react';
import { IFeedTemplate, IRssPage } from '../../../types';
import RssPageByCode from '../rss/RssPageByCode';
import RssPageByCodeRedit from '../rss/RssPageByCodeRedit';
import styles from './RssPage.module.css';

const RssPage: React.FC<IRssPage> = ({ feedOptions, code, isExpanded }) => {
  return (
    <>
      {feedOptions
        .filter(o => o.code === code)
        .map((feedTemplate: IFeedTemplate) => {
          if (feedTemplate.rssTemplate === 'generic') {
            return (
              <RssPageByCode
                code={feedTemplate.code}
                key={feedTemplate.id}
                isExpanded={isExpanded}
              />
            );
          } else if (feedTemplate.rssTemplate === 'redit') {
            return (
              <RssPageByCodeRedit
                code={feedTemplate.code}
                key={feedTemplate.id}
                isExpanded={isExpanded}
              />
            );
          } else {
            return [];
          }
        }) || []}
    </>
  );
};

export default RssPage;
