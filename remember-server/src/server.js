const Koa = require('koa');
const {initAll} = require('koa-serve-decorator');

let app = new Koa();

app.use(require('koa-body')({multipart:true}));

//log and error handle
app.use(require('./log'));

//koa-mongo
app.use(require('./db'));

app.use(initAll({
    dirs: [
        [`${__dirname}/controller`],
        [`${__dirname}/service`],
    ],
    route:{
        base: ['/api', 'all']
    }
}));


app.listen(3000);