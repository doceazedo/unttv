export default eventHandler(async ({ path }) => {
  const badges = await twurple.chat.getGlobalBadges();
  const body = formatBadgesResponse(badges);
  await cache(path, body);
  return body;
});
