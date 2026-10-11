import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import {
  projects,
  navigation,
  profile,
  socials,
  archive,
  mobileProject,
} from '../src/content/portfolio.ts';

assert.equal(
  new Set(projects.map((project) => project.id)).size,
  projects.length,
  'Project IDs must be unique',
);
assert.equal(
  new Set(navigation.map((item) => item.id)).size,
  navigation.length,
  'Navigation IDs must be unique',
);
for (const project of projects) {
  assert.ok(existsSync(`public${project.image}`), `Missing image: ${project.image}`);
  assert.ok(project.imageAlt.length > 10, `Missing descriptive alt text: ${project.id}`);
  assert.ok(
    project.highlights.length > 0 && project.architecture.length > 0,
    `Missing case study: ${project.id}`,
  );
}
const urls = [
  ...projects.flatMap((project) => [project.liveUrl, project.githubUrl]),
  ...socials.map((item) => item.url),
  ...archive.map((item) => item.url),
  ...mobileProject.links.map((item) => item.url),
];
for (const url of urls) {
  if (url) assert.equal(new URL(url).protocol, 'https:', `External link must be HTTPS: ${url}`);
}
assert.ok(existsSync(`public${profile.cvUrl}`), 'Missing local CV');
assert.ok(
  readFileSync(`public${profile.cvUrl}`).subarray(0, 4).toString() === '%PDF',
  'CV must be a real PDF',
);
assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
console.log('Content checks passed: unique IDs, links, project assets, case studies and CV.');
