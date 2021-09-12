const axios = require('axios');
const xml2js = require('xml2js');
const rss = require('../../../settings.json');

const getFeedsAction = (req, response) => {
    // axios.defaults.headers.common = { "Accept": "application/json"};
    response.header("Content-Type", "application/json");

    const url = rss.filter(r => r.name === req.name).map(r => r.url);

    axios.get(url).then((req, res, next) => {
        console.log('reg');
        xml2js.parseString(req.data, async (err, result) => {
            const items = await result['rss']['channel'][0].item;
            const data = items.map(item => {
                return {
                    title: item.title[0],
                    description: item.description,
                    link: item.link,
                    author: item.author,
                    pubDate: item.pubDate
                }
            });
            console.log('data', data);
            response.jsonp({ items: data });
        })
    });
};

module.exports = getFeedsAction;