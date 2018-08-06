const base = async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
}

const teste = async (ctx) => {
  ctx.body = {
    status: 'teste'
  };
}

module.exports = { base, teste }