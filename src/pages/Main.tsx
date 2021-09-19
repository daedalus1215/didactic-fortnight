import React from 'react';
import { match } from 'react-router-dom';
import { IFeedTemplate } from '../types';
import ListOfRss from './listOfRss/ListOfRss';

interface IMain {
  feedOptions: Array<IFeedTemplate>;
  history: any;
  location: any;
  match: match;
}

const Main: React.FC<IMain> = props => {
  return (
    <div className="both">
      <ListOfRss feedOptions={props.feedOptions} />
      <div className="second">yes</div>
    </div>
  );
};

export default Main;
