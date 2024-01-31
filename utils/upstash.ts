import "dotenv/config";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "1m"),
  analytics: true,
});

const getTruePath = (path: string) => path.split("?")[0];

export const cache = async (path: string, body: unknown, seconds = 300) => {
  const key = `cache:${getTruePath(path)}`;
  await redis.set(key, JSON.stringify(body));
  await redis.expire(key, seconds);
};

export const getCachedResult = async (path: string) =>
  (await redis.get(`cache:${getTruePath(path)}`)) as
    | string
    | Object
    | Array<unknown>;
