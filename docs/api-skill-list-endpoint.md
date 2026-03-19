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
      "summary": "컨벤셔널 커밋 규칙으로 메시지 일관성을 맞춥니다.",
      "revision": 2,
      "risk": "low",
      "applyScopes": ["project", "global"],
      "tags": ["git", "commit", "convention"]
    }
  ]
}
```

## First Apply Usage
- 이 응답은 **선택지 제시용**이다. 첫 적용에서는 여기서 바로 apply 계획을 확정하지 않는다.
- 사용자에게는 최소 아래 항목을 먼저 보여준다.
  - `name`
  - `id`
  - `summary`
  - `risk`
  - `applyScopes`
- 기본 질문은 `어떤 pack을 적용할까요?` 1개만 던진다.
- 첫 적용에서는 여러 pack 동시 적용보다 1개 먼저 적용을 기본값으로 제안한다.

## Notes
- 목록 응답만으로 apply하지 않는다.
- 사용자가 선택한 pack은 detail / instruction endpoint를 재조회해야 한다.
- GitHub Pages MVP에서는 정적 JSON으로 제공한다.
