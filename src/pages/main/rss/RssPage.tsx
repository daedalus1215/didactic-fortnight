import React from 'react';
import { IFeedTemplate, IRssPage } from '../../../types';
import RssPageByCode from '../rss/RssPageByCode';

const RssPage: React.FC<IRssPage> = ({ feedOptions, code, isExpanded }) => {
  return (
    <>
      {feedOptions
        .filter(o => o.code === code)
        .map((feedTemplate: IFeedTemplate) => {
          return (
            <RssPageByCode
              feedTemplate={feedTemplate}
              key={feedTemplate.id}
              isExpanded={isExpanded}
            />
          );
        })}
    </>
  );
};

export default RssPage;
