const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const compress = require('koa-compress');
const Cors = require('@koa/cors');
const mongo = require('koa-mongo');

const app = new Koa();
const router = new Router();

require('../routes/')(router);

app.use(mongo({
  uri: 'mongodb://database:27017',
}));

app.use(Cors());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(compress());

module.exports = app;
