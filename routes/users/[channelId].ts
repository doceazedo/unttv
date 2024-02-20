export default eventHandler(async ({ context, path }) => {
  const { channelId } = context.params;
  const idOrLogin = getIdOrLogin(channelId);

  const user = idOrLogin.userId
    ? await twurple.users.getUserById(channelId)
    : await twurple.users.getUserByName(channelId);
  if (!user) return cachedEmptyResponse(path, 404);

  const body = {
    id: user.id,
    name: user.name,
    displayName: user.displayName,
    type: user.type,
    broadcasterType: user.broadcasterType,
    description: user.description,
    profilePictureUrl: user.profilePictureUrl,
    offlinePlaceholderUrl: user.offlinePlaceholderUrl,
    creationDate: user.creationDate,
  };

  await cache(path, body);
  return body;
});
