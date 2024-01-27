export default eventHandler(async () => {
  const streams = await twurple.streams.getStreams();
  if (!streams.data) return null;
  const stream = streams.data[0];
  return {
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
});
