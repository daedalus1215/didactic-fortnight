const axios = require('axios');
const xml2js = require('xml2js');
const rss = require('../../../settings.json');

const getRssFeedByCodeAction = (req, response) => {
    // axios.defaults.headers.common = { "Accept": "application/json"};
    response.header("Content-Type", "application/json");

    const code = req.query.code;
    console.log('code', code)
    const url = rss.filter(r => r.code === code).map(r => r.url)[0];
    console.log('==========================================')
    console.log('url', url)
    axios.get(url).then(async (req, res, next) => {
        const data = await req.data;
        xml2js.parseString(data, (err, result) => {
            console.log('err', err)
            const items = result?.rss.channel[0].item;

            const data = items?.map(item => {
                return {
                    title: item.title[0],
                    description: item.description,
                    link: item.link,
                    author: item.author,
                    pubDate: item.pubDate
                }
            });
            response.jsonp({ items: data });
        })
    });
};

module.exports = getRssFeedByCodeAction;