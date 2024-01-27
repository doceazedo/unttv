export default eventHandler(async ({ context, path }) => {
  const badges = await twurple.chat.getChannelBadges(context.params.channelId);
  const body = formatBadgesResponse(badges);
  await cache(path, body);
  return body;
});
