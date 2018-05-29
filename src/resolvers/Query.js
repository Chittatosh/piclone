const { getUserId } = require('../utils');

const userId = ctx => ({ id: getUserId(ctx) });

const Query = {
  fullPicList: (parent, args, ctx, info) => ctx.db.query.pictures({}, info),
  userList: (parent, args, ctx, info) => ctx.db.query.users({}, info),
  me: (parent, args, ctx, info) =>
    ctx.db.query.user({ where: userId(ctx) }, info),
};

module.exports = { Query };
