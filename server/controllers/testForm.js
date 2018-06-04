module.exports = ctx => {
  ctx.state.data = {
    msg: ctx.request.body
  }
}