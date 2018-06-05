function post(ctx, next) {
  var username = ctx.request.body.username
  ctx.state.data = {
    message: '你好，' + username + '!',
    type: 'POST'
  }
}

function get(ctx, next) {
  var username = ctx.query.username
  ctx.state.data = {
    message: '你好，' + username + '!',
    type: 'GET'
  }
}

module.exports = {
  post,
  get
}