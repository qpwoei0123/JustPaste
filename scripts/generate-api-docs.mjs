import { readFileSync, writeFileSync } from 'node:fs';
const idx=JSON.parse(readFileSync('packs/index.json','utf8'));
const lines=['# Generated API Packs','',`- schemaVersion: ${idx.schemaVersion}`,''];
for (const p of idx.packs) lines.push(`- ${p.id}: ${p.summary}`);
writeFileSync('docs/api-generated-from-metadata.md', lines.join('\n')+'\n');
