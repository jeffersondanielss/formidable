const { root } = require('../controllers')

module.exports = (router) => {
  router.get('/', root);
}
