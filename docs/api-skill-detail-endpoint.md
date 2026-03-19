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

## First Apply Usage
- detail 응답은 **선택 확인용**이다.
- 첫 적용에서는 selection 이후 아래 내용을 다시 요약해 보여준다.
  - `name` + `id`
  - `summary`
  - `risk`
  - `applyScopes`
- 이 단계에서는 `당신이 고른 pack은 이것이고, 기대 효과는 이것입니다`를 재확인한다.
- scope 질문은 detail 확인 뒤에 이어서 묻는다.

## Notes
- detail 응답은 사용자 선택 UI와 요약 설명에 사용한다.
- 실제 apply 전에는 instruction endpoint를 함께 재조회해야 한다.
