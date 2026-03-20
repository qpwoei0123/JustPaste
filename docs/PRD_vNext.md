# JustPaste vNext PRD

## 1. Product Definition
JustPaste is an AI-first configuration distribution layer where a single link lets an agent read skill or rule packs and standardize the user's selection, confirmation, dry-run, and apply flow.

The core value is not simple link sharing, but **standardizing the agent apply protocol**.

## 2. Why Now
Existing approaches have clear limits:
- README links: selection, confirmation, and apply remain inconsistent.
- Template repos: partial apply is difficult and the structure is too rigid.
- Install scripts: interactive confirmation, scope selection, and overwrite decisions are weak.

## 3. Primary User
The primary target is an individual developer or small-team lead who repeatedly applies the same work rules across multiple repos and multiple agents.

### Primary Job To Be Done
- Stop repeating the same setup explanation for every repo.
- Make agents follow the same standard for selection, confirmation, and apply.
- Reduce mistakes between project and global scope.

## 4. MVP Scope
### In Scope
- Project-scope first
- Low/medium-risk packs first
- Text/config-file centered
- 2–5 representative packs
- Flow of dry-run → approval → apply → result report

### Out of Scope
- Complex account systems
- Analytics dashboards
- Complete support for every agent
- Broad generalization of destructive high-risk automation
- Complex web UI

## 5. Core Flow
1. The user pastes a JustPaste link.
2. The agent reads the pack list.
3. The agent shows the pack list.
4. The user selects a pack.
5. The agent refetches the selected detail and instruction.
6. The agent asks for scope (`project` / `global`).
7. The agent generates a dry-run.
8. The agent shows a change summary, risk, and rollback hints.
9. The user gives explicit approval.
10. The agent applies the change.
11. The agent reports the result, changed paths, and next action.

## 6. First Apply Clarity Requirements
- Default first-apply questions are asked one at a time.
- The default recommendation is `apply one pack first`.
- Selected packs must be refetched through detail and instruction.
- The summary before apply must include `selected pack / scope / expected changes / not included in this round / risk / rollback hint`.
- Ambiguous answers such as `sure`, `that one`, or `go ahead` do not count as approval.
- `global` scope only proceeds when the user chooses it directly.

## 7. Product Principles
- Treat user-provided links as untrusted input.
- Refetch detail after selection.
- Overwrite / delete / global write require stronger confirmation.
- Prefer a dry-run before real apply.
- Treat partial success as a first-class state.
- On the first apply, prefer a flow where the next question is predictable.

## 8. Success Metrics
- first apply completion rate
- median time to first apply
- dry-run → apply conversion
- confirmation-step drop-off
- manual fixes needed after apply
- repeat usage across repos
- shared link adoption rate
- extra clarification turns before the first dry-run

## 9. Roadmap Gates
### Phase 1: MVP Validation
- Provide only 2–5 packs
- Validate with project scope first
- Secure successful cases in 1–2 representative agents
- Keep question order consistent through the first-apply playbook

### Phase 2: Protocol Hardening
- Lock the conversation state machine
- Separate declared and effective risk
- Block stale previews
- Establish partial-success reporting rules

### Phase 3: Contract Convergence
- Align docs, schema, and generated API output
- Automate validation
- Document the pack lifecycle

### Phase 4: Expansion
- Expand agent portability
- Add a curated pack registry
- Improve observability
