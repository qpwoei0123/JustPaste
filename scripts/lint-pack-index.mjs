import { readFileSync } from 'node:fs';
const j=JSON.parse(readFileSync('packs/index.json','utf8'));
const ids=j.packs.map(p=>p.id);
if (ids.join(',')!==[...ids].sort().join(',')) throw new Error('pack index not sorted by id');
for (const p of j.packs) for (const k of ['id','name','summary','revision']) if (!(k in p)) throw new Error('missing '+k);
console.log('pack index lint ok');
