import type { HelixChatBadgeSet } from "@twurple/api";

export const formatBadgesResponse = (badges: HelixChatBadgeSet[]) =>
  badges.map((badge) => ({
    id: badge.id,
    versions: badge.versions.map((version) => ({
      id: version.id,
      title: version.title,
      description: version.description,
      clickAction: version.clickAction,
      clickUrl: version.clickUrl,
      image_url_1x: version.getImageUrl(1),
      image_url_2x: version.getImageUrl(2),
      image_url_4x: version.getImageUrl(4),
    })),
  }));

export const cachedEmptyResponse = async (path: string, status = 200) => {
  cache(path, "", 60);
  return new Response(JSON.stringify(null), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
