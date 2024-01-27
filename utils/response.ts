import type { HelixChatBadgeSet } from "@twurple/api";

export const formatBadgesResponse = (badges: HelixChatBadgeSet[]) =>
  badges.map((badge) => ({
    id: badge.id,
    versions: badge.versions.map((version) => ({
      clickAction: version.clickAction,
      clickUrl: version.clickUrl,
      description: version.description,
      id: version.id,
      title: version.title,
    })),
  }));
