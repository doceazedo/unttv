export default eventHandler(async () => {
  const badges = await twurple.chat.getGlobalBadges();
  return formatBadgesResponse(badges);
});
