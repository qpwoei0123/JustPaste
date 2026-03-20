# Pack Instruction Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/{packId}/instruction.json`

## Success Response (200)
```json
{
  "schemaVersion": "2026-03-11",
  "packId": "commit-convention",
  "revision": 3,
  "contractVersion": "instruction.v1",
  "confirmationFlow": {
    "selectionRequired": true,
    "scopeRequired": true,
    "dryRunRequiredAt": "medium",
    "explicitYesRequiredAt": "high"
  },
  "riskModel": {
    "declaredRisk": "low",
    "effectiveRiskMayEscalate": true,
    "sensitivePaths": [".github/*", "AGENTS.md", "WORK_RULES.md"]
  },
  "source": {
    "instructionPath": "packs/commit-convention/instruction.md"
  }
}
```

## Error Response (404)
```json
{
  "schemaVersion": "2026-03-11",
  "error": {
    "code": "PACK_NOT_FOUND",
    "message": "No pack found for given packId",
    "details": {}
  }
}
```

## First Apply Usage
- The instruction response is the **source of truth for generating questions right before apply**.
- On the first apply, enforce this order:
  1. confirm that selection is complete
  2. confirm scope
  3. prepare the dry-run summary
  4. show risk and rollback hints
  5. request an explicit approval sentence
- `confirmationFlow` decides when a dry-run is required and when explicit yes is required.
- `riskModel` is used when explaining which paths are sensitive to the user.
- Immediately before apply, summarize `selected pack / scope / expected changes / risk` in one line.

## Error Handling
- If the endpoint returns 404, do not attempt apply.
- Also tell the user what they should do next, such as reselecting the pack ID.

## Notes
- The instruction response structures user confirmation items, dry-run requirements, and possible risk escalation.
- In the GitHub Pages MVP, this is served as static JSON.
