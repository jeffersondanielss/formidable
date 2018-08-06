const Koa = require('koa');
const route = require('koa-route');
const logger = require('koa-logger');
const compress = require('koa-compress');
const { base, teste } = require('../controllers')

const app = new Koa();

app.use(logger());
app.use(route.get('/', base));
app.use(route.get('/teste/', teste));
app.use(compress());

module.exports = app;