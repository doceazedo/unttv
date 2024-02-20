import "dotenv/config";

type OauthTokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string[];
  token_type: string;
};

type UserResponse = {
  data: {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    created_at: string;
  }[];
};

export default eventHandler(async ({ context, path }) => {
  try {
    const token = await exchangeTokens(context.params.code);
    if (!token) throw Error("Could not exchange tokens");

    const user = await getUser(token.access_token);
    if (!user) throw Error("Could not fetch user data");

    return {
      token: {
        accessToken: token.access_token,
        expiresIn: token.expires_in,
        refreshToken: token.refresh_token,
        scope: token.scope,
        tokenType: token.token_type,
      },
      user: {
        id: user.id,
        name: user.login,
        displayName: user.display_name,
        type: user.type,
        broadcasterType: user.broadcaster_type,
        description: user.description,
        profilePictureUrl: user.profile_image_url,
        offlinePlaceholderUrl: user.offline_image_url,
        creationDate: user.created_at,
      },
    };
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: `${error?.message || "Internal Error"}`,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
});

const exchangeTokens = async (
  code: string
): Promise<OauthTokenResponse | null> => {
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
    if (!resp.ok) throw Error();
    return data as OauthTokenResponse;
  } catch (error) {
    return null;
  }
};

const getUser = async (token: string) => {
  try {
    const resp = await fetch("https://api.twitch.tv/helix/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": process.env.TWITCH_CLIENT_ID,
      },
    });
    if (!resp.ok) throw Error();
    const data = (await resp.json()) as UserResponse;
    if (!data?.data?.length) throw Error();
    return data.data[0];
  } catch (error) {
    return null;
  }
};
