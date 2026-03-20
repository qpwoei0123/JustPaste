# Skill Detail Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/{packId}/detail.json`

## Success Response (200)
```json
{
  "schemaVersion": "2026-03-11",
  "id": "commit-convention",
  "name": "Commit Convention",
  "summary": "Standardize commit messages with conventional commit rules.",
  "revision": 3,
  "risk": "low",
  "applyScopes": ["project", "global"],
  "tags": ["git", "commit", "convention"],
  "contractVersion": "instruction.v1"
}
```

## First Apply Usage
- The detail response is for **selection confirmation**.
- After selection, summarize these fields again for the user:
  - `name` + `id`
  - `summary`
  - `risk`
  - `applyScopes`
- At this stage, reconfirm: `This is the pack you chose, and this is the expected effect.`
- Ask the scope question after detail confirmation.

## Notes
- Use the detail response for selection UI and short summaries.
- Before actual apply, refetch the instruction endpoint as well.
