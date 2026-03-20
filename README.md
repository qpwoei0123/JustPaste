# JustPaste

Paste a link. The agent sets the skills.

> Korean README: [README.kr.md](./README.kr.md)

JustPaste is an AI-first hub where a user can paste a single link and the agent follows a predictable flow: **selection → scope confirmation → dry-run → explicit approval → apply**.

## Working Rules
Project work follows the root [WORK_RULES.md](./WORK_RULES.md).

Core rules:
- Small issues and small commits
- Label-based priority and status management
- Keep the MVP philosophy: agents adapt in real time to the current environment

## 1-Minute First Apply Guide
1. The user pastes a JustPaste link to the agent.
2. The agent reads `./api/v1/packs/index.json` and first shows each pack's name, id, summary, risk, and supported scopes.
3. The user chooses one or more packs to apply.
4. The agent refetches the selected pack's `detail.json` and `instruction.json`.
5. The agent summarizes the scope (`project`/`global`), expected changed files, risk, and rollback hints.
6. Only after explicit approval does the agent apply the change and report the result.

## Questions the Agent Must Not Skip on the First Apply
- Which pack should I apply?
- Should this be applied at `project` or `global` scope?
- If matching files already exist, should I merge or replace them?
- After reviewing the dry-run summary, should I apply now?

## Structure
- `docs/`: product and planning documents
- `contracts/`: agent instruction and confirmation contracts
- `packs/`: skill-pack metadata and content
- `examples/`: example user flows
- `site/`: GitHub Pages static site

## GitHub Pages
- Deployment: GitHub Actions (`.github/workflows/pages.yml`)
- Default URL: `https://qpwoei0123.github.io/JustPaste/`

## API (MVP, static)
- Pack list endpoint:
  - `/api/v1/packs/index.json`
- Pack detail endpoint:
  - `/api/v1/packs/commit-convention/detail.json`
  - `/api/v1/packs/pr-clarity-template/detail.json`
- Pack instruction endpoint:
  - `/api/v1/packs/commit-convention/instruction.json`
  - `/api/v1/packs/pr-clarity-template/instruction.json`
