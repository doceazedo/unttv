# 📺 UNTTV

> Unlimited read-only access to Twitch API

## Why UNTTV?

Accessing the Twitch API should be fast, easy and straightforward. Helix requires an authentication token, and more often than not, devs just want to build frontend-only apps but suddenly need to have a server to call basic endpoints or expose their tokens on the browser.

UNTTV provides a simplified, cached, and anonymous layer to make the Twitch API more enjoyable!

## How it works?

We use an auto-refreshing token, so you can use this UNTTV from any location. To avoid hitting Twitch's rate limits, we have a limit of **100 requests per minute** per IP.

We also cache results to reduce load on the Twitch API and provide faster responses. By default, results are **cached for 5 minutes** and empty results for 1 minute. Cached responses don't count towards your rate limit. To determine if a response is cached, check for the presence of an `X-Cached` header.

## Who's using it?

- **[emotettv](https://github.com/doceazedo/emotettv):** emote parser that uses UNTTV to load Twitch badges

<small><i>Do you also use UNTTV on your project? Please add it here! ✨</i></small>

## API

We implement endpoints as needed, if you need to read a Twitch API endpoint that we don't cover yet, please [open an issue](https://github.com/doceazedo/unttv/issues/new).

Note that UNTTV endpoints don't necessarily match to Twitch's API.

### `/streams/top-viewers-stream`

Current stream with most viewers

**Example:** https://unttv.vercel.app/streams/top-viewers-stream

```json
{
  "gameId": "460630",
  "gameName": "Tom Clancy's Rainbow Six Siege",
  "id": "41781382184",
  "isMature": false,
  "language": "en",
  "startDate": "2024-01-27T00:28:42.000Z",
  "tags": ["ADHD", "LOUD", "funny", "English"],
  "thumbnailUrl": "https://static-cdn.jtvnw.net/previews-ttv/live_user_jynxzi-{width}x{height}.jpg",
  "title": "Jynxzi Kahoot W/ Chat",
  "type": "live",
  "userDisplayName": "Jynxzi",
  "userId": "411377640",
  "userName": "jynxzi",
  "viewers": 60153
}
```

### `/streams/[channelIdOrName]`

Current stream of a channel

**Example:** https://unttv.vercel.app/streams/nocopyrightsounds

```json
{
  "gameId": "26936",
  "gameName": "Music",
  "id": "40389108677",
  "isMature": false,
  "language": "en",
  "startDate": "2024-01-30T07:38:15.000Z",
  "tags": ["English"],
  "thumbnailUrl": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nocopyrightsounds-{width}x{height}.jpg",
  "title": "NCS - Copyright Free Music Livestream 🎵 EDM, Gaming, Trap, House, Dubstep",
  "type": "live",
  "userDisplayName": "NoCopyrightSounds",
  "userId": "46375210",
  "userName": "nocopyrightsounds",
  "viewers": 41
}
```

### `/badges/channel/[channelId]`

List of chat badges of a broadcaster's channel

**Example:** https://unttv.vercel.app/badges/channel/98776633

```json
[
  {
    "id": "subscriber",
    "versions": [
      {
        "id": "0",
        "title": "Subscriber",
        "description": "Subscriber",
        "clickAction": "subscribe_to_channel",
        "clickUrl": null,
        "image_url_1x": "https://static-cdn.jtvnw.net/badges/v1/92bfc11b-4cd2-4078-971d-6b5c5e73247b/1",
        "image_url_2x": "https://static-cdn.jtvnw.net/badges/v1/92bfc11b-4cd2-4078-971d-6b5c5e73247b/2",
        "image_url_4x": "https://static-cdn.jtvnw.net/badges/v1/92bfc11b-4cd2-4078-971d-6b5c5e73247b/3"
      }
    ]
  }
]
```

### `/badges/global`

List of global chat badges, that can be used in any chat

**Example:** https://unttv.vercel.app/badges/global

```json
[
  {
    "id": "broadcaster",
    "versions": [
      {
        "id": "1",
        "title": "Broadcaster",
        "description": "Broadcaster",
        "clickAction": null,
        "clickUrl": null,
        "image_url_1x": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1",
        "image_url_2x": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2",
        "image_url_4x": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3"
      }
    ]
  }
]
```

## License

The UNTTV project is licensed under the [GPLv3 License](./LICENSE).
