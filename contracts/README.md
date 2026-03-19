# contracts

에이전트가 따라야 할 instruction/selection/confirmation 계약 문서를 둔다.

- `INSTRUCTION_CONTRACT_V0.md`: JustPaste 링크 처리 최소 절차(v0)
- `SELECTION_CONFIRMATION_FLOW_V0.md`: selection + confirmation flow 초기 버전
- `SELECTION_CONFIRMATION_FLOW_V1.md`: 첫 적용에서 선택, 재조회, scope, dry-run, 명시 승인 순서를 고정한 흐름
- `PRE_APPLY_CHECKLIST_V1.md`: apply 직전 반드시 다시 보여줘야 하는 체크리스트

## JSON Schemas
- `contracts/schemas/common.schema.json`
- `contracts/schemas/pack-index.schema.json`
- `contracts/schemas/pack-detail.schema.json`
- `contracts/schemas/instruction.schema.json`
- `contracts/schemas/error.schema.json`
