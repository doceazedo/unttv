export default eventHandler(async ({ context, path }) => {
  const { channelId } = context.params;

  let userId: string;
  let userName: string;

  if (isNaN(parseInt(channelId))) {
    userName = channelId;
  } else {
    userId = channelId;
  }

  const streams = await twurple.streams.getStreams({
    userId,
    userName,
  });
  if (!streams.data.length) return cachedEmptyResponse(path);

  const stream = streams.data[0];
  const body = {
    gameId: stream.gameId,
    gameName: stream.gameName,
    id: stream.id,
    isMature: stream.isMature,
    language: stream.language,
    startDate: stream.startDate,
    tags: stream.tags,
    thumbnailUrl: stream.thumbnailUrl,
    title: stream.title,
    type: stream.type,
    userDisplayName: stream.userDisplayName,
    userId: stream.userId,
    userName: stream.userName,
    viewers: stream.viewers,
  };

  await cache(path, body);
  return body;
});
