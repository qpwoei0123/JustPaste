# Pack Lifecycle

## Canonical Source
- `packs/index.json`
- `packs/*/pack.json`
- `packs/*/instruction.md`
- `packs/*/CHANGELOG.md`

`site/api/v1/*` is a generated artifact.

## Lifecycle
1. authoring
   - write the pack metadata and instruction
2. validation
   - validate metadata and generated artifacts
3. version / revision update
   - update version or revision according to change scope
4. API generation
   - generate `site/api/v1/*`
5. snapshot / schema check
   - validate generated output
6. publish
   - publish to GitHub Pages
7. deprecate / archive / remove
   - record deprecation state and removal policy

## Policy
- Human-edited source of truth lives under `packs/*`.
- Do not manually edit generated artifacts.
- Schema, docs, and generated output must follow the same contract.
