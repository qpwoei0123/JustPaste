# INSTRUCTION CONTRACT v1

JustPaste 링크를 받은 에이전트가 따라야 할 표준 절차를 정의한다.

## 0. 목적
- 에이전트가 일관된 선택/확인/적용 프로토콜을 수행하게 만든다.
- 링크 기반 적용에서도 안전성과 예측 가능성을 확보한다.

## 1. Required Execution Order
1. 링크 지침과 pack 목록을 읽는다.
2. pack 목록을 `name / id / summary / declaredRisk / availableScopes`와 함께 제시한다.
3. 사용자 선택을 받는다.
4. 선택이 모호하면 재질문한다.
5. 선택된 pack detail / instruction을 재조회한다.
6. apply scope를 확인한다.
7. dry-run을 생성한다.
8. effective risk를 계산한다.
9. 승인을 받는다.
10. apply 직전 preview freshness를 검사한다.
11. 적용한다.
12. 결과를 보고한다.

## 2. Risk Model
### Declared Risk
pack metadata에 선언된 기본 위험도다.

### Effective Risk
실제 실행 계획 기준 최종 위험도다. 아래 상황에서 상향 조정할 수 있다.
- overwrite 발생
- delete 발생
- global write
- 민감 경로 수정
- 다수 파일 수정
- low-risk pack 여러 개 동시 적용

Effective risk가 declared risk보다 우선한다.

## 3. Dry-run Requirements
Dry-run은 구조화된 포맷으로 아래를 포함해야 한다.
- summary
- target paths
- action type (`create`, `update`, `delete`, `merge`)
- overwrite risk
- diff summary
- rollback hint
- blocking issues

Dry-run 이후 대상 파일 상태가 바뀌면 apply를 중단하고 새 dry-run을 요구한다.

## 4. Approval Rules
- low: 조회 또는 비파괴 계획. 기본 확인 생략 가능
- medium: 요약 + confirm 필요
- high: dry-run + explicit yes 필요

### Explicit Yes Required
아래 상황은 high-risk로 취급한다.
- overwrite
- delete
- global write
- 민감 경로 수정

## 5. Result Reporting
성공/실패 여부와 별개로 아래를 항상 보고한다.
- 변경 완료 파일
- 변경 미완료 파일
- 현재 안전 상태
- rollback 방법
- 다음 추천 액션

## 6. Failure Taxonomy
- `fetch_failure`
- `planning_failure`
- `execution_failure`
- `partial_success`

## 7. Prohibitions
- 사용자 확인 없이 global write 금지
- 사용자 확인 없이 overwrite 금지
- 선택되지 않은 pack 임의 적용 금지
- stale preview 기반 apply 금지
