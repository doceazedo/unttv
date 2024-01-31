export default defineEventHandler(async (event) => {
  const cached = await getCachedResult(event.path);
  if (cached != null) {
    const body = JSON.stringify(cached === "" ? null : cached);
    return new Response(body, {
      headers: {
        "X-Cached": "true",
        "Content-Type": "application/json",
      },
    });
  }
});
