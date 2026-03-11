# JustPaste vNext PRD

## 1. Product Definition
JustPaste는 링크 하나로 에이전트가 스킬/규칙 팩을 읽고, 사용자와 선택·확인·dry-run·적용 절차를 표준화해서 수행하게 만드는 AI-우선 설정 배포 레이어다.

핵심은 단순 링크 공유가 아니라 **에이전트 적용 프로토콜 표준화**다.

## 2. Why Now
기존 방식은 아래 한계가 있다.
- README 링크: 선택/확인/적용 절차가 비표준적이다.
- 템플릿 repo: 부분 적용이 어렵고 구조를 과하게 강제한다.
- 설치 스크립트: 대화형 확인, 범위 선택, overwrite 판단이 약하다.

## 3. Primary User
1차 타겟은 여러 repo / 여러 에이전트에서 동일한 작업 규칙을 반복 적용하는 개인 개발자 또는 소규모 팀 리드다.

### Primary Job To Be Done
- repo마다 같은 설정 설명을 반복하지 않는다.
- 에이전트가 같은 기준으로 선택/확인/적용하게 만든다.
- project/global 범위 실수를 줄인다.

## 4. MVP Scope
### In Scope
- project scope 중심
- low/medium risk 팩 중심
- text/config 파일 중심
- 2~5개 대표 팩
- dry-run → approval → apply → result report 흐름

### Out of Scope
- 복잡한 계정 시스템
- 분석 대시보드
- 모든 에이전트 완전 지원
- 고위험 destructive 자동화 일반화
- 복잡한 웹 UI

## 5. Core Flow
1. 사용자가 JustPaste 링크를 붙여넣는다.
2. 에이전트가 pack list를 읽는다.
3. 에이전트가 pack 목록을 보여준다.
4. 사용자가 pack을 선택한다.
5. 에이전트는 선택한 detail/instruction을 재조회한다.
6. 에이전트가 scope(project/global)를 묻는다.
7. 에이전트가 dry-run을 생성한다.
8. 에이전트가 변경 요약, 위험, rollback hint를 보여준다.
9. 사용자가 명시적으로 승인한다.
10. 에이전트가 apply한다.
11. 결과와 변경 경로, 다음 액션을 보고한다.

## 6. Product Principles
- 사용자 제공 링크는 untrusted input으로 다룬다.
- 선택 후 상세 정보는 재조회한다.
- overwrite / delete / global write는 강화된 확인이 필요하다.
- 가능하면 dry-run을 먼저 제시한다.
- partial success를 1급 상태로 다룬다.

## 7. Success Metrics
- first apply completion rate
- median time to first apply
- dry-run → apply conversion
- confirmation step drop-off
- manual fix needed after apply
- repeat usage across repos
- shared link adoption rate

## 8. Roadmap Gates
### Phase 1: MVP Validation
- 2~5개 pack만 제공
- project scope 중심으로 검증
- 대표 에이전트 1~2개에서 성공 사례 확보

### Phase 2: Protocol Hardening
- conversation state machine 고정
- declared/effective risk 분리
- stale preview 차단
- partial success 보고 규약 정착

### Phase 3: Contract Convergence
- docs / schema / generated API output 일치
- validation 자동화
- pack lifecycle 문서화

### Phase 4: Expansion
- agent portability 확대
- curated pack registry
- observability 고도화
