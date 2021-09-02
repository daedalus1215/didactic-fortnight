const getFeedsAction = require('../actions/getFeedsAction');

const routes = (app, key) => {
    // const getCryptoPriceRequestHandler = getCryptoPriceAction(key);
    app.get('/status', (req, res) => { res.status(200).jsonp({ success: true }).end(); });
    app.get('/api/status', (req, res) => { res.status(200).jsonp({ success: true }).end(); });
    app.get('/api/feeds', getFeedsAction);
}

module.exports = routes;