# First Apply Playbook

## 목적
첫 적용에서 사용자가 헷갈리지 않도록, JustPaste를 읽은 에이전트가 최소한 어떤 질문과 요약을 보여줘야 하는지 한 장으로 고정한다.

## 첫 적용 기본 원칙
1. 목록만 보고 바로 apply하지 않는다.
2. 첫 라운드는 여러 pack 동시 적용보다 1개 먼저 적용을 기본값으로 둔다.
3. 선택 후에는 detail/instruction을 다시 읽는다.
4. scope, 예상 변경 파일, 위험, rollback hint를 먼저 보여준다.
5. 명시 승인 전에는 파일을 쓰지 않는다.

## 사용자가 꼭 보게 되는 질문
- 어떤 pack을 적용할까요?
- 범위는 `project`와 `global` 중 어디인가요?
- 기존 파일이 있으면 merge와 overwrite 중 무엇을 원하나요?
- dry-run 요약을 확인했고, 지금 apply할까요?

## apply 직전 최소 요약 템플릿
- 선택: `<pack name> (<pack id>)`
- 기대 효과: `<what changes>`
- 범위: `<project|global>`
- 예상 변경: `<files and action types>`
- 이번 라운드 비포함: `<what will not change now>`
- 위험: `<declared/effective risk>`
- 롤백 힌트: `<how to undo>`
- 승인 요청: `yes, apply`처럼 명시적으로 답해주세요.

## 첫 적용 성공 기준
- 사용자가 다음 질문이 무엇인지 예측할 수 있다.
- 에이전트가 선택하지 않은 pack을 임의 포함하지 않는다.
- 사용자가 scope와 overwrite 결정을 직접 내린다.
- dry-run 이후 조건이 바뀌면 apply를 멈춘다.
- 결과 보고에 변경 파일과 다음 액션이 포함된다.
