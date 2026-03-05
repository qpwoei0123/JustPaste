# API Error Model (v1)

모든 에러 응답은 아래 구조를 따른다.

```json
{
  "schemaVersion": "2026-03-01",
  "error": {
    "code": "PACK_NOT_FOUND",
    "message": "No pack found for given packId",
    "details": {}
  }
}
```

## Stable Error Codes
- `PACK_NOT_FOUND`
- `VALIDATION_ERROR`
- `CONFLICT`
- `FORBIDDEN`
- `INTERNAL_ERROR`
