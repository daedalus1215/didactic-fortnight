const axios = require('axios');
const xml2js = require('xml2js');
const rss = require('../../../settings.json');

const getReditRssFeedByCodeAction = (req, response) => {
    // axios.defaults.headers.common = { "Accept": "application/json"};
    response.header("Content-Type", "application/json");

    const code = req.query.code;
    console.log('code', code)
    const url = rss.filter(r => r.code === code).map(r => r.url)[0];
    // console.log('==========================================')
    console.log('url', url)
    axios.get(url).then(async (req, res, next) => {
        const data = await req.data;
        xml2js.parseString(data, (err, result) => {
            console.log('err', err)
            // console.log('result', result.feed.entry)

            const items = result.feed.entry;
            const data = items?.map(item => {
                console.log('item. ', item['media:thumbnail']?.[0]?.$?.url)
                // console.log('what', {
                //     title: item.title[0],
                //     description: item.content[0]._,
                //     link: item.link[0].$.href,
                //     author: item.author[0].name[0],
                //     pubDate: item.published[0],
                //     image: item.link[0].$.href
                // })
                return {
                    title: item.title[0],
                    description: item.content[0]._,
                    link: item.link[0].$.href[0],
                    author: item.author?.[0].name[0],
                    pubDate: item.published[0],
                    image: item['media:thumbnail']?.[0]?.$?.url
                }
            });
            // console.log('items', data)
            response.jsonp({ items: data });
        })
    });
};

module.exports = getReditRssFeedByCodeAction;