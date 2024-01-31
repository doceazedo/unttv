export default eventHandler(async ({ context, path }) => {
  const { channelId } = context.params;
  const videos = await twurple.videos.getVideosByUser(channelId);
  const body = videos.data.map((video) => ({
    id: video.id,
    userId: video.userId,
    userName: video.userName,
    userDisplayName: video.userDisplayName,
    title: video.title,
    description: video.description,
    creationDate: video.creationDate,
    publishDate: video.publishDate,
    url: video.url,
    thumbnailUrl: video.thumbnailUrl,
    isPublic: video.isPublic,
    views: video.views,
    language: video.language,
    type: video.type,
    duration: video.duration,
    durationInSeconds: video.durationInSeconds,
    streamId: video.streamId,
    mutedSegmentData: video.mutedSegmentData,
    isMutedAt: video.isMutedAt,
  }));
  await cache(path, body);
  return body;
});
