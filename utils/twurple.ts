import "dotenv/config";
import { RefreshingAuthProvider, type AccessToken } from "@twurple/auth";
import { ApiClient } from "@twurple/api";

const authProvider = new RefreshingAuthProvider({
  clientId: process.env.TWITCH_CLIENT_ID,
  clientSecret: process.env.TWITCH_CLIENT_SECRET,
});

export const twurple = new ApiClient({ authProvider });

authProvider.onRefresh(async (userId, newTokenData) => {
  await redis.set("token", JSON.stringify(newTokenData));
});

export const setupTwurple = async () => {
  if (authProvider.hasUser(process.env.TWITCH_CHANNEL_ID)) return;
  const tokenData = (await redis.get("token")) as AccessToken;
  authProvider.addUser(process.env.TWITCH_CHANNEL_ID, tokenData);
};
