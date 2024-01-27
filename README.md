# 📺 UNTTV

> Unlimited read-only access to Twitch API

## Why UNTTV?

Accessing the Twitch API should be fast, easy and straightforward. Helix requires an authentication token, and more often than not, devs just want to build frontend-only apps but suddenly need to have a server to call basic endpoints or expose their tokens on the browser.

UNTTV provides a simplified, cached, and anonymous layer to make the Twitch API more enjoyable!

The name and concept is inspired by [UNGH](https://github.com/unjs/ungh).

## How it works?

We use an auto-refreshing token so you can use this UNTTV anywhere. To prevent getting rate limited by Twitch we — ironically — have a limit of **50 requests per minute** per IP.

We also cache results on Upstash to avoid beating the Twitch API too much and to provide quick responses. By default, results are **cached for 5 minutes**. Cached responses don't count towards your limit. You can find out if a response is cached by checking if it has a `X-Cached` header.

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

### `/badges/channel/[channelId]`

List of chat badges of a broadcaster's channel

**Example:** https://unttv.vercel.app/badges/channel/98776633

```json
[
  {
    "id": "subscriber",
    "versions": [
      {
        "clickAction": "subscribe_to_channel",
        "clickUrl": null,
        "description": "Subscriber",
        "id": "0",
        "title": "Subscriber"
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
        "clickAction": null,
        "clickUrl": null,
        "description": "Broadcaster",
        "id": "1",
        "title": "Broadcaster"
      }
    ]
  }
]
```

## License

The UNTTV project is licensed under the [GPLv3 License](./LICENSE).
