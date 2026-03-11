import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const index = JSON.parse(readFileSync('packs/index.json', 'utf8'));
const sensitivePaths = ['.github/*', 'AGENTS.md', 'WORK_RULES.md'];

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeJson(path, value) {
  ensureDir(dirname(path));
  writeFileSync(path, JSON.stringify(value, null, 2) + '\n');
}

function instructionPayload(pack) {
  return {
    schemaVersion: index.schemaVersion,
    packId: pack.id,
    revision: pack.revision,
    contractVersion: pack.contractVersion,
    confirmationFlow: {
      selectionRequired: true,
      scopeRequired: true,
      dryRunRequiredAt: 'medium',
      explicitYesRequiredAt: 'high'
    },
    riskModel: {
      declaredRisk: pack.risk,
      effectiveRiskMayEscalate: true,
      sensitivePaths
    },
    source: {
      instructionPath: `packs/${pack.id}/instruction.md`
    }
  };
}

for (const summary of index.packs) {
  const pack = JSON.parse(readFileSync(join('packs', summary.id, 'pack.json'), 'utf8'));
  const detail = {
    schemaVersion: index.schemaVersion,
    id: pack.id,
    name: pack.name,
    summary: pack.summary,
    revision: pack.revision,
    risk: pack.risk,
    applyScopes: pack.applyScopes,
    tags: pack.tags,
    contractVersion: pack.contractVersion
  };
  writeJson(join('site/api/v1/packs', pack.id, 'detail.json'), detail);
  writeJson(join('site/api/v1/packs', pack.id, 'instruction.json'), instructionPayload(pack));
}

writeJson('site/api/v1/packs/index.json', index);
writeJson('site/api/v1/errors/pack-not-found.json', {
  schemaVersion: index.schemaVersion,
  error: {
    code: 'PACK_NOT_FOUND',
    message: 'No pack found for given packId',
    details: {}
  }
});

const lines = ['# Generated API Packs', '', `- schemaVersion: ${index.schemaVersion}`, ''];
for (const p of index.packs) lines.push(`- ${p.id}: ${p.summary}`);
writeFileSync('docs/api-generated-from-metadata.md', lines.join('\n') + '\n');
console.log('generated site/api and docs from pack metadata');
