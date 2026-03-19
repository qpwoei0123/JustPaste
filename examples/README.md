# examples

링크 붙여넣기부터 적용까지 end-to-end 예시를 둔다.

첫 적용에서 특히 확인해야 할 흐름:
- pack 목록 먼저 보여주기
- 선택된 pack detail/instruction 재조회
- scope 확인
- dry-run 요약 제시
- 명시 승인 후 apply

파일 안내:
- `codex-flow.md`: Codex 계열 에이전트 기준 첫 적용 대화 예시
- `claude-code-flow.md`: Claude Code 기준 첫 적용 대화 예시
- `conflict-overwrite-scenarios.md`: 기존 파일 충돌/overwrite 예시
- `edge-case-flows.md`: 모호한 입력, stale preview, fetch 실패 등 예외 흐름
