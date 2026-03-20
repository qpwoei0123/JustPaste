# JustPaste

링크를 붙여넣으면, 에이전트가 스킬을 세팅합니다.

> English README: [README.md](./README.md)

JustPaste는 링크 하나만 붙여넣으면 에이전트가 **선택 → 범위 확인 → dry-run → 명시 승인 → apply** 흐름을 따라 스킬/규칙 세팅을 진행하는 AI-우선 허브입니다.

## 작업 규칙
프로젝트 작업 일관성 규칙은 루트의 [WORK_RULES.md](./WORK_RULES.md)를 따릅니다.

핵심:
- 작은 단위 이슈/커밋
- 라벨 기반 우선순위/상태 관리
- MVP는 에이전트가 현재 환경에 맞게 실시간으로 적응한다는 철학 유지

## 첫 적용 1분 가이드
1. 사용자가 JustPaste 링크를 에이전트에게 붙여넣습니다.
2. 에이전트는 `./api/v1/packs/index.json`을 읽고 pack 이름, id, 요약, risk, 지원 scope를 먼저 보여줍니다.
3. 사용자는 적용할 pack을 하나 이상 선택합니다.
4. 에이전트는 선택된 pack의 `detail.json`과 `instruction.json`을 다시 조회합니다.
5. 에이전트는 scope(`project`/`global`), 예상 변경 파일, 위험도, 롤백 힌트를 먼저 요약합니다.
6. 사용자가 명시적으로 승인하면 그때 apply하고 결과를 보고합니다.

## 첫 적용에서 에이전트가 건너뛰면 안 되는 질문
- 어떤 pack을 적용할까요?
- 범위는 `project`와 `global` 중 어디인가요?
- 기존 파일이 이미 있으면 merge와 replace 중 어떤 방식으로 처리할까요?
- dry-run 요약을 확인한 뒤 지금 apply할까요?

## 구조
- `docs/`: 제품/기획 문서
- `contracts/`: 에이전트 지침/확인 계약 문서
- `packs/`: 스킬 팩 메타데이터와 콘텐츠
- `examples/`: 사용자 플로우 예시
- `site/`: GitHub Pages 정적 사이트

## GitHub Pages
- 배포 방식: GitHub Actions (`.github/workflows/pages.yml`)
- 기본 URL: `https://qpwoei0123.github.io/JustPaste/`

## API (MVP, static)
- Pack list endpoint:
  - `/api/v1/packs/index.json`
- Pack detail endpoint:
  - `/api/v1/packs/commit-convention/detail.json`
  - `/api/v1/packs/pr-clarity-template/detail.json`
- Pack instruction endpoint:
  - `/api/v1/packs/commit-convention/instruction.json`
  - `/api/v1/packs/pr-clarity-template/instruction.json`
