# Codex First Apply Flow Example

## Situation
A user pasted a JustPaste link to a Codex-family agent. The goal is to show the order **list → selection → refetch → scope → dry-run → explicit approval → apply**.

## Conversation Example
### 1) Link received
- User: `https://qpwoei0123.github.io/JustPaste/`
- Agent:
  - I read the pack list.
  - Available packs:
    1. `commit-convention` — standardize commit messages with conventional commit rules. (`low`, `project/global`)
    2. `pr-clarity-template` — standardize PR descriptions around summary, scope, and validation. (`low`, `project/global`)
  - Which pack should I apply?

### 2) Selection confirmation
- User: `commit-convention`
- Agent:
  - Selection: `Commit Convention (commit-convention)`
  - Expected effect: commit message format becomes consistent.
  - I will now reread this pack's detail and instruction, then confirm the apply scope.

### 3) Scope confirmation
- Agent:
  - Available scopes: `project`, `global`
  - Which scope should I use?
- User: `project`

### 4) Dry-run preview
- Agent:
  - Expected changes: `AGENTS.md`, `CONTRIBUTING.md`, `.github/commit-template.md`
  - Action: create or merge
  - Risk: declared `low` / effective risk may escalate if existing rules differ
  - Rollback hint: delete newly created files, or revert only the merged sections
  - To continue, reply explicitly with `yes, apply`.

### 5) Approval / apply
- User: `yes, apply`
- Agent:
  - I confirmed the conditions still match the latest dry-run.
  - Applying now.
  - Done: here are the changed files and two sample commits.

## Sentences that must stay in the Codex example
- Do not apply from the list response alone.
- Reread the selected pack's detail and instruction.
- `sure`, `go ahead`, and `do it` do not count as explicit approval.
