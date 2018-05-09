const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const { App } = require('./db/models');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

async function renderAndCache(req, res, pagePath) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    console.log('cache hit');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    const apps = await App.findAll();
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, { apps });

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    console.log('cache miss');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath);
  }
}

app.prepare().then(() => {
  const server = express();

  // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/');
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}
