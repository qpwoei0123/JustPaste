import { readFileSync } from 'node:fs';

const live = JSON.parse(readFileSync('site/api/v1/packs/index.json', 'utf8'));
const snapshot = JSON.parse(readFileSync('tests/snapshots/index.snapshot.json', 'utf8'));

if (JSON.stringify(live) !== JSON.stringify(snapshot)) {
  throw new Error('index snapshot mismatch');
}

console.log('api snapshot ok');
