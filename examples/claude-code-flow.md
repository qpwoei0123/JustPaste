# Claude Code First Apply Flow Example

## 상황
사용자가 JustPaste 링크를 Claude Code에게 전달했다. 목표는 **처음 보는 사용자도 apply 전에 무엇을 결정하는지** 대화만 보고 이해하는 것이다.

## 대화 예시
### 1) pack 목록 제시
- 사용자: `이 링크 기준으로 세팅해줘: https://qpwoei0123.github.io/JustPaste/`
- 에이전트:
  - pack 목록을 불러왔습니다.
  - `commit-convention` — 커밋 메시지 규칙 통일 (`low`, `project/global`)
  - `pr-clarity-template` — PR 템플릿 통일 (`low`, `project/global`)
  - 먼저 어떤 pack을 적용할지 골라주세요.

### 2) 선택된 pack 재확인
- 사용자: `pr-clarity-template`
- 에이전트:
  - 선택: `PR Clarity Template (pr-clarity-template)`
  - 기대 효과: PR 본문이 요약/범위/검증 구조로 정리됩니다.
  - apply 전 detail/instruction을 다시 읽고 범위와 변경 파일을 확인하겠습니다.

### 3) scope + 변경 요약
- 에이전트:
  - 지원 범위: `project`, `global`
  - 예상 변경 파일: `.github/pull_request_template.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `docs/pull-request-template.md`
  - 전략: create or merge
  - 범위를 `project`와 `global` 중에서 선택해주세요.
- 사용자: `project`

### 4) 명시 승인 요청
- 에이전트:
  - dry-run 요약: project 범위에 PR 템플릿 관련 파일을 생성 또는 병합합니다.
  - 롤백 힌트: 새 파일은 삭제, 병합은 diff 기준으로 되돌리면 됩니다.
  - 진행하려면 `yes, apply` 또는 overwrite가 필요하면 `yes, overwrite and apply`처럼 답해주세요.
- 사용자: `yes, apply`

### 5) 적용 결과 보고
- 에이전트:
  - apply를 진행했습니다.
  - 변경 파일, 적용 방식, 다음에 바로 쓸 수 있는 샘플 PR 본문을 보고합니다.

## 첫 적용에서 Claude Code 예시에 꼭 남길 문장
- 범위와 overwrite 여부는 사용자가 결정한다.
- dry-run 요약 없이 바로 파일을 쓰지 않는다.
- 선택하지 않은 pack을 임의로 함께 적용하지 않는다.
