export default eventHandler(async ({ context }) => {
  const badges = await twurple.chat.getChannelBadges(context.params.channelId);
  return formatBadgesResponse(badges);
});
