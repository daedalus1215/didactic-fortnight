const rss = require('../../../settings.json');

const getFeedListAction = (req, response) => {
    // axios.defaults.headers.common = { "Accept": "application/json"};
    response.header("Content-Type", "application/json");
    response.jsonp({ items: rss});
};

module.exports = getFeedListAction;