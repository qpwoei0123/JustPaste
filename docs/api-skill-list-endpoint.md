# Skill List Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/index.json`

## Success Response (200)
```json
{
  "schemaVersion": "2026-03-11",
  "packs": [
    {
      "id": "commit-convention",
      "name": "Commit Convention",
      "summary": "Standardize commit messages with conventional commit rules.",
      "revision": 3,
      "risk": "low",
      "applyScopes": ["project", "global"],
      "tags": ["git", "commit", "convention"]
    }
  ]
}
```

## First Apply Usage
- This response is for **presenting choices**. On the first apply, do not finalize the apply plan from this response alone.
- At minimum, show the user these fields first:
  - `name`
  - `id`
  - `summary`
  - `risk`
  - `applyScopes`
- The default question should be only: `Which pack should I apply?`
- On the first apply, suggest applying one pack before suggesting a multi-pack apply.

## Notes
- Do not apply from the list response alone.
- For the pack the user selects, refetch the detail and instruction endpoints.
- In the GitHub Pages MVP, this is served as static JSON.
