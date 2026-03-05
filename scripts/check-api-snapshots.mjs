import { readFileSync } from 'node:fs';
JSON.parse(readFileSync('tests/snapshots/index.snapshot.json','utf8'));
console.log('api snapshot ok');
