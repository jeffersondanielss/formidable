const { base, teste } = require('../controllers')

module.exports = (router) => {
  router.get('/', base);
  router.get('/teste/', teste);
}
