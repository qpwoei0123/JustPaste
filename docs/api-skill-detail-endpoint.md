# Skill Detail Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/{packId}/detail.json`

## Success Response (200)
```json
{
  "schemaVersion": "2026-03-11",
  "id": "commit-convention",
  "name": "Commit Convention",
  "summary": "컨벤셔널 커밋 규칙으로 메시지 일관성을 맞춥니다.",
  "revision": 2,
  "risk": "low",
  "applyScopes": ["project", "global"],
  "tags": ["git", "commit", "convention"],
  "contractVersion": "instruction.v1"
}
```

## Notes
- detail 응답은 사용자 선택 UI와 요약 설명에 사용한다.
- 실제 apply 전에는 instruction endpoint를 함께 재조회해야 한다.
