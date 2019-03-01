const router = require('koa-router')()
const Info = require('../dbs/models/info')


router.post('/addInfo', async (ctx, next) => {
  console.log(ctx.request.body.name);
  const info = new Info({
    name:ctx.request.body.name,
    age:ctx.request.body.age,
    address:ctx.request.body.address
  })
  let code;
  try{
    await info.save();
    code =0
  }catch(error){
    code = 1
    console.log(error)
  }
  ctx.body = {
    code
  }
})

router.post('/getUserInfo', async (ctx, next) => {
  console.log(ctx.request.body.age);
  const  result = await Info.find({age:ctx.request.body.age});
  ctx.body={
   result
  }
})

router.get('/hello', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 hello'
  }
})

module.exports = router
