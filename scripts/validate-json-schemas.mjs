import { readFileSync } from 'node:fs';
import { join } from 'node:path';

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function validateCommon(doc, path) {
  assert(typeof doc === 'object' && doc !== null, `${path}: expected object`);
  assert(typeof doc.schemaVersion === 'string', `${path}: schemaVersion required`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(doc.schemaVersion), `${path}: schemaVersion must match YYYY-MM-DD`);
}

function validatePackSummary(pack, path) {
  for (const key of ['id', 'name', 'summary']) assert(typeof pack[key] === 'string', `${path}: ${key} required`);
  assert(Number.isInteger(pack.revision) && pack.revision >= 1, `${path}: revision must be integer >= 1`);
  assert(['low', 'medium', 'high'].includes(pack.risk), `${path}: invalid risk`);
  assert(Array.isArray(pack.applyScopes) && pack.applyScopes.every(v => ['project', 'global'].includes(v)), `${path}: invalid applyScopes`);
  assert(Array.isArray(pack.tags) && pack.tags.every(v => typeof v === 'string'), `${path}: invalid tags`);
}

function validateIndex(path) {
  const doc = readJson(path);
  validateCommon(doc, path);
  assert(Array.isArray(doc.packs), `${path}: packs must be array`);
  doc.packs.forEach((pack, i) => validatePackSummary(pack, `${path}#packs[${i}]`));
}

function validateDetail(path) {
  const doc = readJson(path);
  validateCommon(doc, path);
  validatePackSummary(doc, path);
  assert(typeof doc.contractVersion === 'string', `${path}: contractVersion required`);
}

function validateInstruction(path) {
  const doc = readJson(path);
  validateCommon(doc, path);
  assert(typeof doc.packId === 'string', `${path}: packId required`);
  assert(Number.isInteger(doc.revision) && doc.revision >= 1, `${path}: revision required`);
  assert(typeof doc.contractVersion === 'string', `${path}: contractVersion required`);
  assert(typeof doc.confirmationFlow === 'object' && doc.confirmationFlow, `${path}: confirmationFlow required`);
  assert(typeof doc.confirmationFlow.selectionRequired === 'boolean', `${path}: selectionRequired required`);
  assert(typeof doc.confirmationFlow.scopeRequired === 'boolean', `${path}: scopeRequired required`);
  assert(['low', 'medium', 'high'].includes(doc.confirmationFlow.dryRunRequiredAt), `${path}: dryRunRequiredAt invalid`);
  assert(['low', 'medium', 'high'].includes(doc.confirmationFlow.explicitYesRequiredAt), `${path}: explicitYesRequiredAt invalid`);
  assert(typeof doc.riskModel === 'object' && doc.riskModel, `${path}: riskModel required`);
  assert(['low', 'medium', 'high'].includes(doc.riskModel.declaredRisk), `${path}: declaredRisk invalid`);
  assert(typeof doc.riskModel.effectiveRiskMayEscalate === 'boolean', `${path}: effectiveRiskMayEscalate required`);
  assert(Array.isArray(doc.riskModel.sensitivePaths), `${path}: sensitivePaths required`);
  assert(typeof doc.source?.instructionPath === 'string', `${path}: source.instructionPath required`);
}

function validateError(path) {
  const doc = readJson(path);
  validateCommon(doc, path);
  assert(typeof doc.error === 'object' && doc.error, `${path}: error object required`);
  assert(typeof doc.error.code === 'string', `${path}: error.code required`);
  assert(typeof doc.error.message === 'string', `${path}: error.message required`);
  assert(typeof doc.error.details === 'object' && doc.error.details !== null, `${path}: error.details required`);
}

validateIndex('packs/index.json');
validateIndex('site/api/v1/packs/index.json');
for (const id of readJson('packs/index.json').packs.map(p => p.id)) {
  validateDetail(join('site/api/v1/packs', id, 'detail.json'));
  validateInstruction(join('site/api/v1/packs', id, 'instruction.json'));
}
validateError('site/api/v1/errors/pack-not-found.json');
console.log('schema validation ok');
