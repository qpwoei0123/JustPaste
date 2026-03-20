# INSTRUCTION CONTRACT v1

Standard procedure that an agent must follow when it receives a JustPaste link.

## 0. Goal
- Make agents execute a consistent selection / confirmation / apply protocol.
- Preserve safety and predictability even in link-based apply flows.

## 1. Required Execution Order
1. Read the link instructions and the pack list.
2. Present the pack list with `name / id / summary / declaredRisk / availableScopes`.
3. Receive the user's selection.
4. If the selection is ambiguous, ask again.
5. Refetch the selected pack detail and instruction.
6. Confirm the apply scope.
7. Generate a dry-run.
8. Compute effective risk.
9. Obtain approval.
10. Check preview freshness immediately before apply.
11. Apply the change.
12. Report the result.

## 2. Risk Model
### Declared Risk
The base risk level declared in the pack metadata.

### Effective Risk
The final risk level based on the actual execution plan. It may be escalated when:
- an overwrite occurs
- a delete occurs
- there is a global write
- a sensitive path is modified
- many files are modified
- multiple low-risk packs are applied together

Effective risk takes precedence over declared risk.

## 3. Dry-run Requirements
The dry-run must use a structured format and include:
- summary
- target paths
- action type (`create`, `update`, `delete`, `merge`)
- overwrite risk
- diff summary
- rollback hint
- blocking issues

If target file state changes after the dry-run, stop apply and require a new dry-run.

## 4. Approval Rules
- low: read-only or non-destructive planning; basic confirmation may be omitted
- medium: summary + confirmation required
- high: dry-run + explicit yes required

### Explicit Yes Required
Treat the following cases as high risk:
- overwrite
- delete
- global write
- modification of a sensitive path

## 5. Result Reporting
Regardless of success or failure, always report:
- changed files completed
- files not completed
- current safe state
- rollback method
- recommended next action

## 6. Failure Taxonomy
- `fetch_failure`
- `planning_failure`
- `execution_failure`
- `partial_success`

## 7. Prohibitions
- No global writes without user confirmation
- No overwrites without user confirmation
- Do not apply unselected packs on your own
- Do not apply from a stale preview
