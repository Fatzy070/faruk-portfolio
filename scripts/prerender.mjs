import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

// Render content at build time for crawlers and visitors before JS loads.
// Client effects progressively add theme controls, reveals and copy feedback.
const server = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  appType: 'custom',
});
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(App));
  const html = await readFile('dist/index.html', 'utf8');
  if (!html.includes('<div id="root"></div>')) throw new Error('Missing prerender root');
  await writeFile(
    'dist/index.html',
    html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`),
  );
  console.log('Prerendered portfolio content into dist/index.html');
} finally {
  await server.close();
}
