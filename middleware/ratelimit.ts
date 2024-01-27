export default defineEventHandler(async (event) => {
  const identifier = event.context.clientAddress || "localhost";
  const ratelimitResponse = await ratelimit.limit(identifier);

  if (!ratelimitResponse.success) {
    return new Response(null, {
      headers: {
        "X-Rate-Limit-Reset": ratelimitResponse.reset.toString(),
      },
      status: 429,
    });
  }
});
