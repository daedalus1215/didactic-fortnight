import React from 'react';
import cn from 'classnames';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { IRssPageByCode } from '../../../types';
import './RssPageByCodeRedit.css';

//@TODO: Reorganize this and RssPageByCode.
//@TODO: look to moving the conditional in RssPage and moving it towards determining which list item we show
//@TODO: Remove RssPage, Remove this, Remove RssPageByCode components. in favor of RssCodeListView
//@TODO: Then just have RssListItem, Rss
const RssPageByCodeRedit: React.FC<IRssPageByCode> = ({ code, isExpanded }) => {
  const [data, setData] = React.useState([]);
  console.log('isExpanded', isExpanded);  
  React.useEffect(() => {
    axios
      .get(`/api/redit-feeds?code=${code}`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(resp => {
        setData(resp.data.items);
      });
  }, [code, setData]);

  return (
    <div
      className={cn({
        'listWrapper': !isExpanded,
        'listWrapperExpanded': isExpanded,
      })}
    >
      <ul className={cn('ul')}>
        {data?.map((d: any) => {
          return (
            <li key={d?.link} className={'li'}>
              <a href={d?.link}>
                {d?.image ? (
                  <img src={d?.image} alt="" className={'img'} />
                ) : (
                  <div className={'imgPlaceholder'}></div>
                )}
                <div className={'text'}>
                  <div className={'title'}>{d?.title}</div>
                  <div className={'description'}>
                    {DOMPurify.sanitize(d?.description, {
                      ALLOWED_TAGS: ['b'],
                    })}
                  </div>
                  <div className={'pubDate'}>{d.pubDate}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RssPageByCodeRedit;
