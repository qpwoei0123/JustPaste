# WORK_RULES.md

JustPaste 작업 일관성을 위한 운영 규칙.

## 1) 작업 단위 원칙
- **Issue 1개 = PR 1개 = 목적 1개**
- 커밋은 가능한 한 작게 (대략 10~60분 단위)
- main 직접 커밋/푸시 금지, feature 브랜치에서 작업

## 2) 우선순위(Labels)
- `priority:p0`: 지금 바로 처리해야 하는 핵심
- `priority:p1`: 중요하지만 p0 다음
- `priority:p2`: 일반 우선순위

처리 순서: **p0 → p1 → p2**

## 3) 상태 관리(라벨 칸반)
- `status:backlog` → 아직 시작 전
- `status:ready` → 바로 착수 가능
- `status:in-progress` → 진행 중
- `status:in-review` → 리뷰/검토 중
- `status:done` → 완료

상태 전환 규칙:
1. 시작할 때 `status:ready` → `status:in-progress`
2. PR 열면 `status:in-review`
3. 머지되면 `status:done`

## 4) 타입/영역 라벨 규칙
### type
- `type:feature`, `type:chore`, `type:docs`, `type:bug`

### area
- `area:instruction`, `area:skill-api`, `area:installer`, `area:ui`

각 이슈는 최소 `type:*` 1개 + `priority:*` 1개를 반드시 가진다.

## 5) PR/커밋 규칙
- 컨벤셔널 커밋 사용
- 커밋 메시지 영어 권장
- 예시
  - `feat(api): add skill list endpoint`
  - `docs(contract): define selection confirmation flow`
  - `chore(github): add issue and pr templates`

## 6) MVP 범위 규칙(중요)
현재 MVP는 **에이전트가 실시간으로 환경에 맞게 세팅**하는 철학을 따른다.

- 사이트는 지침/스킬 메타/스킬 내용을 제공
- 설치 포맷 변화 대응은 에이전트가 수행
- 별도 설치 어댑터 구현은 MVP 필수 아님 (필요 시 후속)

## 7) 완료 정의(Definition of Done)
- 이슈 완료 조건 체크리스트 충족
- 관련 문서 업데이트(필요 시)
- PR 설명에 변경 이유/범위/비범위를 명확히 작성
- 머지 후 상태 라벨 `status:done` 반영
