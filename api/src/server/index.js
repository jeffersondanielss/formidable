const Koa = require('koa');
const route = require('koa-route');
const logger = require('koa-logger');
const compress = require('koa-compress');
const { base, teste } = require('../controllers')

const PORT = 7777;
const app = new Koa();

app.use(logger());
app.use(route.get('/', base));
app.use(route.get('/teste/', teste));
app.use(compress());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;