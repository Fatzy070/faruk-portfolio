import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const output = resolve('dist/index.html');
const vite = await createServer({
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const html = await readFile(output, 'utf8');
  const root = '<div id="root"></div>';

  if (!html.includes(root)) {
    throw new Error('Could not find the root element in dist/index.html');
  }

  const rendered = renderToString(createElement(App));
  await writeFile(output, html.replace(root, `<div id="root">${rendered}</div>`));
  console.log('Prerendered portfolio content into dist/index.html');
} finally {
  await vite.close();
}
