import "dotenv/config";

export default eventHandler(async ({ context, path }) => {
  const code = context.params.code;

  try {
    const resp = await fetch("https://id.twitch.tv/oauth2/token", {
      method: "POST",
      body: JSON.stringify({
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: "http://localhost",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    if (!resp.ok)
      return new Response(JSON.stringify(data), {
        status: data?.status || 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    return data;
  } catch (error) {
    return new Response(null, {
      status: 500,
    });
  }
});
