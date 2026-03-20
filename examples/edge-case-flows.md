# Edge Case Flows

## 1. Ambiguous Selection
- User: `that one`
- Agent: asks the user to restate the selected pack name or ID.

## 2. Recommendation Request
- User: `recommend one`
- Agent: explains the recommendation, but still confirms the final choice separately.

## 3. Multi-pack Selection
- User: `apply the commit rules and the PR template`
- Agent: lists both packs again and confirms scope.

## 4. Overwrite / Merge / Skip Branch
- In the dry-run, show the existing-file conflict and ask about overwrite / merge / skip as separate options.

## 5. Stale Preview
- If target files change after the dry-run, report `preview outdated` and generate a new dry-run.

## 6. Partial Failure
- If only some files were applied, show changed and unchanged files separately and explain the current safe state.

## 7. Revision Mismatch
- If the revision shown in the list differs from the detail/instruction revision, tell the user before apply.

## 8. Mixed Scope Request
- If some packs support `project` and others only `global`, show only valid combinations and ask for one decision at a time.
