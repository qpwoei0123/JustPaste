# First Apply Playbook

## Goal
Fix a minimum set of questions and summaries that an agent must show after reading JustPaste so the user does not get confused on the first apply.

## Default Principles for the First Apply
1. Do not apply directly from the list view alone.
2. On the first round, prefer applying one pack before suggesting a multi-pack apply.
3. After selection, read the detail and instruction again.
4. Show scope, expected changed files, risk, and rollback hints first.
5. Do not write files before explicit approval.

## Questions the User Must See
- Which pack should I apply?
- Which scope do you want: `project` or `global`?
- If matching files already exist, do you want merge or overwrite?
- You reviewed the dry-run summary—should I apply now?

## Minimum Summary Template Right Before Apply
- Selection: `<pack name> (<pack id>)`
- Expected effect: `<what changes>`
- Scope: `<project|global>`
- Expected changes: `<files and action types>`
- Not included in this round: `<what will not change now>`
- Risk: `<declared/effective risk>`
- Rollback hint: `<how to undo>`
- Approval request: please answer explicitly, for example `yes, apply`.

## Success Criteria for the First Apply
- The user can predict what the next question will be.
- The agent does not silently include packs that were not selected.
- The user directly decides scope and overwrite behavior.
- If conditions change after the dry-run, the agent stops apply.
- Result reporting includes changed files and the next action.
