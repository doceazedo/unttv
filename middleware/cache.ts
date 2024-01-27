export default defineEventHandler(async (event) => {
  const cached = await getCachedResult(event.path);
  if (cached) {
    return new Response(JSON.stringify(cached), {
      headers: {
        "X-Cached": "true",
        "Content-Type": "application/json",
      },
    });
  }
});
