# Pack Instruction Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/{packId}/instruction.json`

## Success Response (200)
```json
{
  "schemaVersion": "2026-03-11",
  "packId": "commit-convention",
  "revision": 2,
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

## Notes
- instruction 응답은 사용자 확인 항목, dry-run 요구 여부, 위험도 승격 가능성을 구조화해 제공한다.
- GitHub Pages MVP에서는 정적 JSON으로 제공한다.
