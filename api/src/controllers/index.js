const base = async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
}

const teste = async (ctx) => {
  ctx.body = await ctx.mongo.db('test').collection('users').find().toArray();
}

module.exports = { base, teste }