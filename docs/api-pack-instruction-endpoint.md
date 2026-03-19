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

## First Apply Usage
- instruction 응답은 **apply 직전 질문을 만드는 기준**이다.
- 첫 적용에서는 아래 순서를 강제한다.
  1. selection이 끝났는지 확인
  2. scope를 확인
  3. dry-run 요약을 준비
  4. risk와 rollback hint를 보여줌
  5. 명시 승인 문장을 요청
- `confirmationFlow`는 dry-run 필요 시점과 explicit yes 요구 시점을 결정한다.
- `riskModel`은 사용자에게 어떤 경로가 민감한지 설명할 때 사용한다.
- apply 직전에는 `선택 pack / scope / 예상 변경 / 위험`을 한 줄로 다시 요약한다.

## Error Handling
- 404를 받으면 apply를 시도하지 않는다.
- 사용자가 다음에 해야 할 액션(예: pack id 재선택)을 함께 안내한다.

## Notes
- instruction 응답은 사용자 확인 항목, dry-run 요구 여부, 위험도 승격 가능성을 구조화해 제공한다.
- GitHub Pages MVP에서는 정적 JSON으로 제공한다.
