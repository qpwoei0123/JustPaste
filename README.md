# JustPaste

Paste link. Agent sets skills.

## Working rule
프로젝트 작업 일관성 규칙은 루트의 [WORK_RULES.md](./WORK_RULES.md)를 따른다.

핵심:
- 작은 단위 이슈/커밋
- 라벨 기반 우선순위/상태 관리
- MVP는 에이전트 실시간 세팅 철학 유지

## Structure
- `docs/` : 제품/기획 문서
- `contracts/` : 에이전트 지침 계약 문서
- `packs/` : 스킬 팩 데이터
- `examples/` : 사용자 플로우 예시
- `site/` : GitHub Pages 정적 사이트

## GitHub Pages
- 배포 방식: GitHub Actions (`.github/workflows/pages.yml`)
- 기본 URL: `https://qpwoei0123.github.io/JustPaste/`
