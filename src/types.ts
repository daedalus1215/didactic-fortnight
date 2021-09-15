export interface IFeed {
    link: string|undefined;
    title: string|undefined;
    author: string|undefined;
    description: string|undefined;
    pubDate: string|undefined;
}

export interface IFeedTemplate {
    url: string;
    name: string;
    id: number;
    code: string;
    rssTemplate: string;
}

export interface IRssPage {
    code: string;
}