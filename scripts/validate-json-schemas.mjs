import { readdirSync, readFileSync } from 'node:fs';
const dir = new URL('../contracts/schemas/', import.meta.url);
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.json')) continue;
  JSON.parse(readFileSync(new URL(f, dir), 'utf8'));
}
console.log('schema json parse ok');
