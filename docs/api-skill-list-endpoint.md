# Skill List Endpoint (v1)

## Endpoint
- `GET /api/v1/packs/index.json`

## Success Response (200)
```json
{
  "schemaVersion": "2026-03-01",
  "packs": [
    {
      "id": "commit-convention",
      "name": "Commit Convention",
      "summary": "컨벤셔널 커밋 규칙으로 메시지 일관성을 맞춥니다.",
      "revision": 1
    }
  ]
}
```

## Contract Rule
- 모든 JSON 응답 최상위에는 `schemaVersion` 필드가 **필수**입니다.
- `schemaVersion`은 날짜 기반 문자열(`YYYY-MM-DD`)을 사용합니다.
