const getFeedListAction = require('../actions/getFeedListAction');
const getRssFeedByCodeAction = require('../actions/getRssFeedByCodeAction');

const routes = (app, key) => {
    // const getCryptoPriceRequestHandler = getCryptoPriceAction(key);
    app.get('/status', (req, res) => { res.status(200).jsonp({ success: true }).end(); });
    app.get('/api/status', (req, res) => { res.status(201).jsonp({ success: true }).end(); });
    app.get('/api/feeds', getRssFeedByCodeAction);
    app.get('/api/feed-list', getFeedListAction);
}

module.exports = routes;