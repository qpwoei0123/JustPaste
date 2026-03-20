# Risk Level & Confirmation Criteria

## Risk Layers
JustPaste uses two layers of risk:
- `declaredRisk`: base risk declared in pack metadata
- `effectiveRisk`: final risk derived from the actual execution plan

Final confirmation strength always follows `effectiveRisk`.

## Base Criteria
- low: read-only / non-destructive planning; basic confirmation may be omitted
- medium: file creation or modification; summary + confirmation required
- high: deletion / overwrite / broad changes / global write; summary + dry-run + explicit yes required

## Escalation Rules
`effectiveRisk` may be escalated if any of the following happens:
- overwrite occurs
- delete occurs
- `global` scope write occurs
- a sensitive path is modified
- many files are modified
- multiple low-risk packs are applied together
- file state changes after the dry-run

## Sensitive Paths
- `.github/*`
- `AGENTS.md`
- `WORK_RULES.md`
- `.claude/*`
- `.cursor/*`
- global dotfiles and user home configuration files

## Approval Strength
- low: may be omitted
- medium: summary + confirm
- high: dry-run + explicit yes

## Explicit Yes Examples
Allowed examples:
- `yes, apply`
- `yes, overwrite and apply`
- `apply it at global scope`

Disallowed examples:
- `sure`
- `go ahead`
- `do it`
- `sounds good`
