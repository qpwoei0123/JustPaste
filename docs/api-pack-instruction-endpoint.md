# Pack Instruction Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/{packId}/instruction.json`

## Success Response (200)
```json
{
  "packId": "commit-convention",
  "revision": 1,
  "contractVersion": "instruction.v0",
  "steps": [
    "Read pack metadata",
    "Show selectable options to user",
    "Confirm scope before apply"
  ],
  "source": {
    "instructionPath": "packs/commit-convention/instruction.md"
  }
}
```

## Error Response (404)
```json
{
  "error": {
    "code": "PACK_NOT_FOUND",
    "message": "No pack found for given packId"
  }
}
```

## Notes
- For MVP on GitHub Pages, endpoints are served as static JSON files.
- Dynamic routing/validation will be added in API implementation phase.
