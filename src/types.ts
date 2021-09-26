export interface IFeed {
    link: string|undefined;
    title: string|undefined;
    author: string|undefined;
    description: string|undefined;
    pubDate: string|undefined;
};

export interface IFeedTemplate {
    url: string;
    name: string;
    id: number;
    code: string;
    rssTemplate: string;
};

export interface IRssPageByCode {
    code: string;
    isExpanded: boolean;
    feedOptions: Array<IFeedTemplate>;
};

export interface IRssPage {
    feedOptions: Array<IFeedTemplate>;
    code: string;
    isExpanded: boolean;
};

export interface IRssItem {
    rss: {
        link: string;
        image: string;
        text: string;
        title: string;
        description: string;
        pubDate: string;
    }
};