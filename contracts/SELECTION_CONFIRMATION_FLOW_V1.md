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
- The agent reads the link and prepares to fetch the pack list.
- Do not promise apply to the user yet.

### `packs_listed`
- Show the following for each pack:
  - `name`
  - `id`
  - `summary`
  - `declaredRisk`
  - `availableScopes`
- The default next question should ask for exactly one pack selection.
- On the first apply, prefer **apply one pack first** instead of pushing a multi-pack apply by default.

### `selection_pending`
- If the user's answer is ambiguous, ask again.
- Recommendations are allowed, but final selection confirmation must not be skipped.

### `selection_confirmed`
- Show the selected pack's name, ID, and expected effect again.
- Do not silently include packs the user did not choose.
- On the first apply, keep only the pack(s) that will actually be applied in this round and defer the rest.

### `details_refetched`
- Refetch the selected pack detail and instruction.
- Do not apply using stale cache alone.
- If the revision shown in the list differs from the refetched revision, tell the user.

### `scope_pending`
- Confirm one scope at a time: `project` or `global`.
- If packs support different scopes, show only valid combinations.
- Do not push `global` as the default on the first apply; the user must choose it directly.

### `dry_run_ready`
- The dry-run result must include target paths, action type, risk, and rollback hint.
- Also show **what will not be changed in this round** to reduce over-expectation.
- If file state changes after the dry-run, stop apply.

### `approval_pending`
- Medium risk and above require summary + confirmation.
- High risk requires dry-run + explicit yes.
- Do not treat vague answers as approval.
- Immediately before asking for approval, summarize the selected pack, scope, and expected changed files in one line.

### `applying`
- Confirm that the conditions still match the latest dry-run, then apply.

### `partial_success`
- Report completed and incomplete files separately.
- Always explain the current safe state and the next action.

### `done`
- Report changed paths, result summary, and rollback hints.

### `blocked`
- Clearly report the stop reason, such as fetch failure, planning failure, or execution failure.
- Also tell the user what they need to answer or confirm next.

## Canonical Confirmation Template
- Selection: `<pack name> (<pack id>)`
- Expected effect: `<what changes>`
- Scope: `<project|global>`
- Expected changes: `<create/update/delete files>`
- Not included in this round: `<what will not be changed now>`
- Risk: `<declared/effective risk>`
- To continue, reply explicitly with something like `<yes, apply>`.

## Ambiguous Input Rule
The following responses do **not** count as high-risk approval.
- `sure`
- `that one`
- `go ahead`
- `do it`
- `sounds good`

High-risk approval requires equally explicit language.
- `yes, apply`
- `yes, overwrite and apply`
- `apply it at global scope`
