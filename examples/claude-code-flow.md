# Claude Code First Apply Flow Example

## Situation
A user gave a JustPaste link to Claude Code. The goal is that even a first-time user can understand what they must decide before apply just by reading the conversation.

## Conversation Example
### 1) Pack list shown
- User: `Set me up using this link: https://qpwoei0123.github.io/JustPaste/`
- Agent:
  - I loaded the pack list.
  - `commit-convention` — standardize commit message rules (`low`, `project/global`)
  - `pr-clarity-template` — standardize the PR template (`low`, `project/global`)
  - First, which pack would you like to apply?

### 2) Selected pack reconfirmed
- User: `pr-clarity-template`
- Agent:
  - Selection: `PR Clarity Template (pr-clarity-template)`
  - Expected effect: PR bodies will follow a summary / scope / validation structure.
  - Before apply, I will reread the detail and instruction, then confirm scope and changed files.

### 3) Scope + change summary
- Agent:
  - Available scopes: `project`, `global`
  - Expected changed files: `.github/pull_request_template.md`, `.github/PULL_REQUEST_TEMPLATE.md`, `docs/pull-request-template.md`
  - Strategy: create or merge
  - Please choose the scope: `project` or `global`.
- User: `project`

### 4) Explicit approval request
- Agent:
  - Dry-run summary: create or merge PR-template files inside project scope.
  - Rollback hint: delete new files, or revert the merge diff if merged.
  - To continue, reply with `yes, apply`. If overwrite is needed, reply with `yes, overwrite and apply`.
- User: `yes, apply`

### 5) Apply result report
- Agent:
  - I completed the apply.
  - Here are the changed files, the strategy used, and a sample PR body you can use immediately.

## Sentences that must stay in the Claude Code example
- Scope and overwrite behavior are decided by the user.
- Do not write files before showing a dry-run summary.
- Do not silently apply packs the user did not choose.
