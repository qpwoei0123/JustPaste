# Codex First Apply Flow Example

## 상황
사용자가 JustPaste 링크를 Codex 계열 에이전트에게 붙여넣었다. 목표는 **목록 확인 → 선택 → 재조회 → scope 확인 → dry-run → 명시 승인 → apply** 순서를 보여주는 것이다.

## 대화 예시
### 1) 링크 수신
- 사용자: `https://qpwoei0123.github.io/JustPaste/`
- 에이전트:
  - pack 목록을 읽었습니다.
  - 선택 가능한 pack:
    1. `commit-convention` — 컨벤셔널 커밋 규칙으로 메시지 일관성을 맞춥니다. (`low`, `project/global`)
    2. `pr-clarity-template` — PR 설명을 요약/범위/검증 중심으로 통일합니다. (`low`, `project/global`)
  - 어떤 pack을 적용할까요?

### 2) 선택 확인
- 사용자: `commit-convention`
- 에이전트:
  - 선택: `Commit Convention (commit-convention)`
  - 기대 효과: 커밋 메시지 형식을 통일합니다.
  - 이제 선택된 pack의 detail/instruction을 다시 읽고 적용 범위를 확인하겠습니다.

### 3) scope 확인
- 에이전트:
  - 지원 범위: `project`, `global`
  - 어디에 적용할까요?
- 사용자: `project`

### 4) dry-run 제시
- 에이전트:
  - 예상 변경: `AGENTS.md`, `CONTRIBUTING.md`, `.github/commit-template.md`
  - 액션: create or merge
  - 위험: declared `low` / effective risk may escalate if existing rules differ
  - rollback hint: 새 파일 생성 시 삭제, 병합 시 변경 부분만 되돌리기
  - 진행하려면 `yes, apply`처럼 명시적으로 답해주세요.

### 5) 승인 / apply
- 사용자: `yes, apply`
- 에이전트:
  - 최신 dry-run 조건과 동일함을 확인했습니다.
  - 적용을 진행합니다.
  - 완료: 변경 파일 목록과 샘플 커밋 2개를 보고합니다.

## 첫 적용에서 Codex 예시에 꼭 남길 문장
- 목록만 보고 바로 apply하지 않는다.
- 선택된 pack은 detail/instruction을 다시 읽는다.
- `ㅇㅇ`, `ㄱㄱ`, `진행`은 명시 승인으로 취급하지 않는다.
