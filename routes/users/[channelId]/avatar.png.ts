export default eventHandler(async ({ context, path }) => {
  const { channelId } = context.params;
  const idOrLogin = getIdOrLogin(channelId);

  const user = idOrLogin.userId
    ? await twurple.users.getUserById(channelId)
    : await twurple.users.getUserByName(channelId);
  if (!user) return cachedEmptyResponse(path, 404);

  const body = {
    redirectUrl: user.profilePictureUrl,
  };

  await cache(path, body, 1800);
  return Response.redirect(user.profilePictureUrl, 302);
});
