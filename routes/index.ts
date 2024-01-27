const repoUrl = "http://github.com/doceazedo/unttv";
const docsUrl = "/_nitro/swagger";

export default eventHandler(
  () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📺 UNTTV</title>
</head>
<body>
  <h1>📺 UNTTV Api</h1>
  <p>Docs: <a href="${docsUrl}">${docsUrl}</a></p>
  <p>Learn more: <a href="${repoUrl}">${repoUrl}</a></p>
</body>
</html>`
);
