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
- Commit SHA: `pending`

## Round 3
- User: pending
- Planner: pending
- Developer: pending
- Changed files: pending
- Validation: pending
- Commit SHA: `pending`

## Round 4
- User: pending
- Planner: pending
- Developer: pending
- Changed files: pending
- Validation: pending
- Commit SHA: `pending`

## Round 5
- User: pending
- Planner: pending
- Developer: pending
- Changed files: pending
- Validation: pending
- Commit SHA: `pending`

## Round 6
- User: pending
- Planner: pending
- Developer: pending
- Changed files: pending
- Validation: pending
- Commit SHA: `pending`
