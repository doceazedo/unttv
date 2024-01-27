//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    "/**": {
      cache: process.env.NODE_ENV === "production" ? { maxAge: 60 } : undefined,
      cors: true,
    },
  },
  experimental: {
    openAPI: true,
  },
});
