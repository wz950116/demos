const Koa = require('koa');
const Router = require('koa-router');
const cors = require('kcors');
const http = require('http');
const app = new Koa();
const router = new Router();

// 支持跨域
app.use(cors());

// 选择地址页 地址列表
const addressList = require('./personal/addresslist');
router.get('/api/addresslist', function(ctx, next) {
    console.log('选择地址 已保存地址列表')
    ctx.body = addressList
})

// 随意删掉的其他mock End

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('Server running at port 3000...')