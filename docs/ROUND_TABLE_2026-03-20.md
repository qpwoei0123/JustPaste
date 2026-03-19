# ROUND TABLE — 2026-03-20

- Overall theme: 첫 적용 전에 사용자가 무엇을 고르고 언제 승인하는지 헷갈리지 않게 만드는 온보딩 선명화
- Branch: `feat/first-apply-clarity`

## Round 1
- User: 링크를 받았는데 첫 화면에서 무엇을 보고 어떤 질문에 답해야 하는지 바로 이해하고 싶다.
- Planner: README에 첫 적용 1분 가이드와 필수 질문 순서를 추가해 진입 장벽을 낮춘다.
- Developer: README에 첫 적용 단계, 필수 확인 질문, detail/instruction 재조회 순서를 명시했다.
- Changed files:
  - `README.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "첫 적용 1분 가이드\|건너뛰면 안 되는 질문" README.md`
- Commit SHA: `98aac412e9b1179b0946284a38f3268172cb7d09`

## Round 2
- User: 랜딩 페이지를 열었을 때 apply 전에 무엇을 선택하고 언제 승인해야 하는지 한눈에 보고 싶다.
- Planner: 사이트 첫 화면에 첫 적용 플로우, 사용자 결정 항목, 명시 승인 예시를 추가한다.
- Developer: `site/index.html`에 apply 전 단계와 승인 예시를 보강하고 참고 문서 링크를 추가했다.
- Changed files:
  - `site/index.html`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `python3 - <<'PY'`
    `from html.parser import HTMLParser; HTMLParser().feed(open('site/index.html').read())`
    `print('html parse ok')`
    `PY`
  - `grep -n "첫 적용 플로우\|명시 승인 예시\|사용자가 직접 결정하는 것" site/index.html`
- Commit SHA: `2aca63ea05cc08bd4c4e339794c5daa0e6ebf55f`

## Round 3
- User: 문서 설명만으로는 부족하고, 실제 대화 예시로 어떤 문장이 오가야 하는지 보고 싶다.
- Planner: Codex/Claude Code 예시를 실제 첫 적용 대화 시나리오로 확장한다.
- Developer: 예시 문서를 pack 목록 제시, 선택 재확인, scope 질문, dry-run, 명시 승인, 결과 보고 흐름으로 다시 썼다.
- Changed files:
  - `examples/README.md`
  - `examples/codex-flow.md`
  - `examples/claude-code-flow.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "yes, apply\|detail/instruction\|dry-run" examples/codex-flow.md examples/claude-code-flow.md`
- Commit SHA: `20901ffc254324cfd35a31000f93057126b1748d`

## Round 4
- User: 첫 적용에서 에이전트가 여러 pack을 한꺼번에 밀어넣거나 애매한 답을 승인으로 오해하지 않았으면 좋겠다.
- Planner: 계약 문서에 첫 적용 기본값과 apply 직전 재확인 항목을 더 명확하게 적는다.
- Developer: selection/confirmation flow와 pre-apply checklist에 단일 pack 우선, global 비강제, 비포함 범위 고지, 마지막 요약 규칙을 추가했다.
- Changed files:
  - `contracts/SELECTION_CONFIRMATION_FLOW_V1.md`
  - `contracts/PRE_APPLY_CHECKLIST_V1.md`
  - `contracts/README.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "첫 적용\|이번 라운드 비포함\|global" contracts/SELECTION_CONFIRMATION_FLOW_V1.md contracts/PRE_APPLY_CHECKLIST_V1.md contracts/README.md`
- Commit SHA: `fba978f7bc74c986db41112f499fcf81db6ebe13`

## Round 5
- User: API 문서를 읽는 에이전트가 endpoint 순서는 알지만, 첫 적용 질문을 어떤 순서로 만들지 헷갈리지 않았으면 좋겠다.
- Planner: list/detail/instruction endpoint 문서에 첫 적용 사용법을 따로 적어 질문 생성 순서를 고정한다.
- Developer: 세 endpoint 문서에 첫 적용 usage 섹션을 추가해 선택지 제시, 선택 확인, apply 직전 요약 역할을 분리했다.
- Changed files:
  - `docs/api-skill-list-endpoint.md`
  - `docs/api-skill-detail-endpoint.md`
  - `docs/api-pack-instruction-endpoint.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "First Apply Usage\|첫 적용" docs/api-skill-list-endpoint.md docs/api-skill-detail-endpoint.md docs/api-pack-instruction-endpoint.md`
- Commit SHA: `4aaa2aade838e31541484b4cc7c311062be1542e`

## Round 6
- User: 팀이 나중에 문서를 다시 볼 때도 “좋은 첫 적용” 기준이 한 군데에 정리돼 있으면 좋겠다.
- Planner: 제품 문서에 첫 적용 플레이북을 추가하고, one-pager/PRD에 이 기준을 제품 요구사항으로 묶는다.
- Developer: `docs/FIRST_APPLY_PLAYBOOK.md`를 만들고 제품 문서에 첫 적용 약속, 요구사항, 추가 지표를 반영했다.
- Changed files:
  - `docs/FIRST_APPLY_PLAYBOOK.md`
  - `docs/ONE_PAGER.md`
  - `docs/PRD_vNext.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "First Apply Promise\|First Apply Clarity Requirements\|명시 승인" docs/ONE_PAGER.md docs/PRD_vNext.md docs/FIRST_APPLY_PLAYBOOK.md`
- Commit SHA: `pending`
