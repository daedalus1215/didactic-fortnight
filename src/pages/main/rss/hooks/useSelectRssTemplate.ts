
const useSelectRssTemplate = (feedOptions:Array<any>, code:string) => {
    return feedOptions
        .filter(f => f.code === code)
        .map(f => f.rssTemplate)[0]
}

export default useSelectRssTemplate;