const { getUserId } = require('../../utils');

const userId = ctx => ({ id: getUserId(ctx) });

const picture = {
  addPicture: async (parent, { picUrl, picTitle }, ctx, info) =>
    ctx.db.mutation.createPicture(
      {
        data: {
          picUrl,
          picTitle,
          picUploader: {
            connect: userId(ctx),
          },
        },
      },
      info,
    ),
  removePicture: async (parent, { id }, ctx, info) => {
    const pictureExists = await ctx.db.exists.Picture({
      id,
      picUploader: userId(ctx),
    });
    if (!pictureExists) {
      throw new Error("Picture not found or you're not the uploader");
    }
    return ctx.db.mutation.deletePicture({ where: { id } }, info);
  },
};

module.exports = { picture };
