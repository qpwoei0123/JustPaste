# API Error Model (v1)

All error responses follow the structure below.

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

## Stable Error Codes
- `PACK_NOT_FOUND`
- `VALIDATION_ERROR`
- `CONFLICT`
- `FORBIDDEN`
- `STALE_PREVIEW`
- `INTERNAL_ERROR`
