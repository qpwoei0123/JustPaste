# ROUND TABLE — 2026-03-20

- Overall theme: clarify onboarding so users do not get confused about what they choose and when they approve before the first apply
- Branch: `feat/first-apply-clarity`
- Note: each round SHA was finalized in the next commit, and the Round 6 SHA was reflected in the final synchronization commit.

## Round 1
- User: I received the link and want to understand immediately what I will see first and which questions I need to answer.
- Planner: add a 1-minute first-apply guide and the required question order to the README so the entry point is easier to understand.
- Developer: documented the first-apply steps, the must-ask questions, and the detail/instruction refetch order in the README.
- Changed files:
  - `README.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "1-Minute First Apply Guide\|Questions the Agent Must Not Skip" README.md`
- Commit SHA: `98aac412e9b1179b0946284a38f3268172cb7d09`

## Round 2
- User: When I open the landing page, I want to see at a glance what must be selected and when approval happens before apply.
- Planner: add the first-apply flow, user decision points, and explicit approval examples to the site landing page.
- Developer: expanded `site/index.html` with the pre-apply flow, approval examples, and reference document links.
- Changed files:
  - `site/index.html`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `python3 - <<'PY'`
    `from html.parser import HTMLParser; HTMLParser().feed(open('site/index.html').read())`
    `print('html parse ok')`
    `PY`
  - `grep -n "First Apply Flow\|Explicit Approval Examples\|User Decisions" site/index.html`
- Commit SHA: `2aca63ea05cc08bd4c4e339794c5daa0e6ebf55f`

## Round 3
- User: Written explanation alone is not enough; I want to see the actual conversation sentences that should be exchanged.
- Planner: expand the Codex and Claude Code examples into realistic first-apply conversation scenarios.
- Developer: rewrote the example documents around pack listing, selection reconfirmation, scope questions, dry-run, explicit approval, and result reporting.
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
- User: On the first apply, I do not want the agent to force multiple packs at once or mistake vague replies for approval.
- Planner: make first-apply defaults and the pre-apply reconfirmation items more explicit in the contract documents.
- Developer: added single-pack-first guidance, no implicit global default, out-of-round disclosure, and final-summary rules to the selection/confirmation flow and pre-apply checklist.
- Changed files:
  - `contracts/SELECTION_CONFIRMATION_FLOW_V1.md`
  - `contracts/PRE_APPLY_CHECKLIST_V1.md`
  - `contracts/README.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "first apply\|Not included in this round\|global" contracts/SELECTION_CONFIRMATION_FLOW_V1.md contracts/PRE_APPLY_CHECKLIST_V1.md contracts/README.md`
- Commit SHA: `fba978f7bc74c986db41112f499fcf81db6ebe13`

## Round 5
- User: I want agents reading the API docs to know the endpoint order and also the exact order for building first-apply questions.
- Planner: add first-apply usage sections to list/detail/instruction endpoint docs so the question generation order stays fixed.
- Developer: added usage sections to the three endpoint documents to separate option listing, selection confirmation, and pre-apply summary roles.
- Changed files:
  - `docs/api-skill-list-endpoint.md`
  - `docs/api-skill-detail-endpoint.md`
  - `docs/api-pack-instruction-endpoint.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "First Apply Usage\|first apply" docs/api-skill-list-endpoint.md docs/api-skill-detail-endpoint.md docs/api-pack-instruction-endpoint.md`
- Commit SHA: `4aaa2aade838e31541484b4cc7c311062be1542e`

## Round 6
- User: When the team revisits the docs later, I want the definition of a “good first apply” collected in one place.
- Planner: add a first-apply playbook and bind the rule into the product docs as a product requirement.
- Developer: created `docs/FIRST_APPLY_PLAYBOOK.md` and updated the product docs with the first-apply promise, requirements, and extra metrics.
- Changed files:
  - `docs/FIRST_APPLY_PLAYBOOK.md`
  - `docs/ONE_PAGER.md`
  - `docs/PRD_vNext.md`
  - `docs/ROUND_TABLE_2026-03-20.md`
- Validation:
  - `git diff --check`
  - `grep -n "First Apply Promise\|First Apply Clarity Requirements\|explicit approval" docs/ONE_PAGER.md docs/PRD_vNext.md docs/FIRST_APPLY_PLAYBOOK.md`
- Commit SHA: `a50827c484a1b4bf15cb70f6547039417acc3985`
