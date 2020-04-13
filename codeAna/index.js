var path = require('path');
const Koa = require('koa')
const compress = require('koa-compress')
const Router = require('koa-router')
const cors = require('@koa/cors')
const serve = require('koa-static')

const {
  getData
} = require('./lib/core');

const app = new Koa()
const router = new Router()

app.use(cors())
app.use(compress())

var filePath = path.resolve('./data');
let { root, nodes, edges } = getData(filePath);

router.get('/getRoot', (ctx, next) => {
  try {
    ctx.body = {
      root: root
    };
  } catch (e) {
    console.log(e)
    next(e)
  }
});

router.get('/getNodeLink', (ctx, next) => {
  try {
    ctx.body = {
      "nodes": nodes,
      "links": edges
    };
  } catch (e) {
    console.log(e)
    next(e)
  }
});

app.use(router.routes())

app.listen(4000);