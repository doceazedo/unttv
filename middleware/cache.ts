export default defineEventHandler(async (event) => {
  const cached = await getCachedResult(event.path);
  if (cached != null) {
    const body = JSON.stringify(cached === "" ? null : cached);
    if (typeof cached == "object" && "redirectUrl" in cached) {
      return Response.redirect(`${cached.redirectUrl}`, 302);
    }
    return new Response(body, {
      headers: {
        "X-Cached": "true",
        "Content-Type": "application/json",
      },
    });
  }
});
