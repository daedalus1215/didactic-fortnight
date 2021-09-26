import React from 'react';
import { IFeedTemplate, IRssPage } from '../../../types';
import RssPageByCode from '../rss/RssPageByCode';
import styles from './RssPage.module.css';

const RssPage: React.FC<IRssPage> = ({ feedOptions, code, isExpanded }) => {
  return (
    <>
      {feedOptions
        .filter(o => o.code === code)
        .map((feedTemplate: IFeedTemplate) => {
          return (
            <RssPageByCode
              code={feedTemplate.code}
              key={feedTemplate.id}
              isExpanded={isExpanded}
              feedOptions={feedOptions}
            />
          );
        })}
    </>
  );
};

export default RssPage;
