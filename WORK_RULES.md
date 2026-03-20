# WORK_RULES.md

Operating rules for keeping JustPaste work consistent.

## 1) Unit of Work
- **1 issue = 1 PR = 1 purpose**
- Keep commits as small as practical (roughly 10–60 minutes each)
- Never commit or push directly to `main`; work on a feature branch

## 2) Priority Labels
- `priority:p0`: critical, handle immediately
- `priority:p1`: important, after p0
- `priority:p2`: normal priority

Order of execution: **p0 → p1 → p2**

## 3) Status Management (Label Kanban)
- `status:backlog` → not started yet
- `status:ready` → ready to start now
- `status:in-progress` → in progress
- `status:in-review` → under review
- `status:done` → complete

Status transition rules:
1. When work starts: `status:ready` → `status:in-progress`
2. When a PR is opened: `status:in-review`
3. After merge: `status:done`

## 4) Type / Area Label Rules
### type
- `type:feature`, `type:chore`, `type:docs`, `type:bug`

### area
- `area:instruction`, `area:skill-api`, `area:installer`, `area:ui`

Each issue must have at least one `type:*` label and one `priority:*` label.

## 5) PR / Commit Rules
- Use conventional commits
- Commit messages in English are preferred
- Examples:
  - `feat(api): add skill list endpoint`
  - `docs(contract): define selection confirmation flow`
  - `chore(github): add issue and PR templates`

## 6) MVP Scope Rule (Important)
The current MVP follows the philosophy that **the agent configures the environment in real time**.

- The site provides instructions, skill metadata, and skill content
- The agent handles format differences at install/apply time
- Separate install adapters are not required for MVP (may come later)

## 7) Definition of Done
- The issue completion checklist is satisfied
- Related documents are updated when needed
- PR description clearly states why the change exists, what is in scope, and what is out of scope
- After merge, update the state label to `status:done`
