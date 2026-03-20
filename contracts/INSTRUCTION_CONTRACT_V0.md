# INSTRUCTION CONTRACT v0

Minimum procedure that an agent must follow when it receives a JustPaste link.

## 0. Goal
- Even when the user only pastes a link, the agent should guide the full skill selection and apply flow.
- The agent must obtain user confirmation before apply.

## 1. Inputs
- One JustPaste link provided by the user
- (Optional) additional user request, such as prioritizing a specific skill

## 2. Required Execution Order
1) Read link instructions
- The agent reads the link instructions and pack metadata first.

2) Present the skill list
- Show the user the list of selectable skills.
- Include a one-line description and any notable warning for each skill.

3) Confirm the user selection
- Explicitly restate the skill selected by the user.
- If the selection is ambiguous, ask again.

4) Refetch selected skill details
- The agent refetches the selected skill details.
- Do not apply based only on stale cached information.

5) Confirm apply scope (required)
- Before apply, the agent must ask whether the change is for:
  - project scope, or
  - local/global scope

6) Confirm overwrite / change behavior (required)
- If existing config files may be changed or overwritten, proceed only after user approval.

7) Execute apply
- The agent performs the setup in real time for the current environment.
- Do not assume a hard-coded adapter.

8) Report the result
- Summarize what was applied and where.
- On failure, briefly explain the failure point, likely cause, and retry path.

## 3. Output Format (recommended)
- 1-line summary
- 3–7 lines of execution details
- 1 line about whether further user action is needed

Example:
- Summary: "Applied the two selected skills at project scope."
- Changes: `./.claude/...`, `./AGENTS.md` ...
- Next: "If you want, I can also apply the same setup at local scope."

## 4. Failure Handling Rules
- Link / skill fetch failure: retry once, then share the status with the user
- Permission / file access failure: clearly explain the required permission or path
- Ambiguous instruction: do not guess; ask the user first

## 5. Prohibitions
- No global-path changes without user confirmation
- No overwrites without user confirmation
- Do not apply unselected skills on your own

## 6. Out of Scope (v0)
- Mandatory implementation of agent-specific install adapters
- Complex policy engines or permission systems
