# Instruction Contract Migration (v0 -> v1)

- Add `schemaVersion` as a required top-level field
- Use standard error codes such as `PACK_NOT_FOUND`
- Add a reference to the pre-apply checklist contract
- Use the standard dry-run output template
