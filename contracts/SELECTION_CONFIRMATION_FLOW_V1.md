# Selection and Confirmation Flow v1

## States
- `link_received`
- `packs_listed`
- `selection_pending`
- `selection_confirmed`
- `details_refetched`
- `scope_pending`
- `dry_run_ready`
- `approval_pending`
- `applying`
- `partial_success`
- `done`
- `blocked`

## State Rules

### `link_received`
- 에이전트는 링크를 읽고 pack 목록 조회를 준비한다.
- 사용자에게는 아직 적용 약속을 하지 않는다.

### `packs_listed`
- 각 pack에 대해 아래를 보여준다.
  - `name`
  - `id`
  - `summary`
  - `declaredRisk`
  - `availableScopes`
- 다음 질문은 기본적으로 pack 선택 1개만 묻는다.
- 첫 적용에서는 여러 pack 동시 적용보다 **1개 먼저 적용**을 기본값으로 제안한다.

### `selection_pending`
- 사용자의 답이 모호하면 재질문한다.
- 추천 요청은 가능하지만 최종 선택 확인을 건너뛰지 않는다.

### `selection_confirmed`
- 선택한 pack의 이름, ID, 기대 효과를 다시 보여준다.
- 선택하지 않은 pack을 임의 포함하지 않는다.
- 첫 적용에서는 이번 라운드에 실제로 apply할 pack만 남기고 나머지는 다음 라운드로 미룬다.

### `details_refetched`
- 선택된 pack detail/instruction을 재조회한다.
- stale cache만으로 apply하지 않는다.
- 목록에서 본 revision과 재조회 revision이 다르면 사용자에게 알린다.

### `scope_pending`
- scope는 `project` 또는 `global` 중 하나씩 확인한다.
- 여러 pack의 지원 scope가 다르면 가능한 조합만 제시한다.
- `global`은 첫 적용 기본값으로 밀지 않고, 사용자가 직접 고르게 한다.

### `dry_run_ready`
- dry-run 결과에는 target paths, action type, risk, rollback hint를 포함한다.
- dry-run 결과에는 **이번 라운드에 변경하지 않는 파일/범위**도 함께 알려 과도한 기대를 줄인다.
- dry-run 이후 파일 상태가 달라지면 apply를 중단한다.

### `approval_pending`
- medium 이상은 요약 + confirm이 필요하다.
- high는 dry-run + explicit yes가 필요하다.
- vague answer는 승인으로 간주하지 않는다.
- 승인 요청 직전에는 선택한 pack, scope, 예상 변경 파일을 다시 한 줄로 요약한다.

### `applying`
- 최신 dry-run과 동일한 조건인지 다시 확인한 뒤 적용한다.

### `partial_success`
- 변경 완료 파일과 미완료 파일을 구분 보고한다.
- 현재 안전 상태와 다음 액션을 반드시 안내한다.

### `done`
- 변경 경로, 결과 요약, rollback 힌트를 보고한다.

### `blocked`
- fetch failure / planning failure / execution failure 등 중단 이유를 명확히 보고한다.
- 사용자가 다음에 무엇을 답하거나 확인해야 하는지도 함께 남긴다.

## Canonical Confirmation Template
- 선택: `<pack name> (<pack id>)`
- 기대 효과: `<what changes>`
- 범위: `<project|global>`
- 예상 변경: `<create/update/delete files>`
- 이번 라운드 비포함: `<what will not be changed now>`
- 위험: `<declared/effective risk>`
- 진행하려면 `<yes, apply>`처럼 명시적으로 답해주세요.

## Ambiguous Input Rule
아래 응답은 high-risk 승인으로 간주하지 않는다.
- `ㅇㅇ`
- `그거`
- `진행`
- `ㄱㄱ`
- `좋아`

high-risk 승인에는 동등 강도의 명시 표현이 필요하다.
- `yes, apply`
- `yes, overwrite and apply`
- `global scope로 적용해`
