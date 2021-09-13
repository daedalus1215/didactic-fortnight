const axios = require('axios');
const xml2js = require('xml2js');
const rss = require('../../../settings.json');

const getFeedsAction = (req, response) => {
    // axios.defaults.headers.common = { "Accept": "application/json"};
    response.header("Content-Type", "application/json");

    const code = req.query.code;
    // console.log('url', code)
    const url = rss.filter(r => r.code === code).map(r => r.url)[0];
    console.log('==========================================')
    console.log('url', url)
    axios.get(url).then((req, res, next) => {
        xml2js.parseString(req.data, async (err, result) => {
            const rss = await result['rss'];
            if (rss) {
                const channels = rss['channel'][0]?.item;
                const data = channels?.map(item => {
                    return {
                        title: item.title[0],
                        description: item.description,
                        link: item.link,
                        author: item.author,
                        pubDate: item.pubDate
                    }
                });
                response.jsonp({ items: data });
            }
        })
    });
};

module.exports = getFeedsAction;