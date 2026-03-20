# JustPaste — Product One Pager (v1)

## One-line Definition
Paste a link and the agent reads the instructions, then guides skill selection and apply as an AI-first skill setup hub.

## Problem
- Agent setup differs from user to user, so initial configuration is repetitive and slow.
- A document link should be enough, but in practice it still requires long explanations and repeated work.
- Install and setup formats change often, so hard-coded approaches break quickly.

## Target Users
- Users of coding agents such as Claude Code or Codex
- Users who want to share the same skills or rules quickly across a team

## First Apply Promise
Even a first-time user who only receives the link should be able to predict this order:
1. View the pack list.
2. Choose the pack to apply.
3. The agent rereads the detail and instruction.
4. View scope, expected changes, risk, and rollback hints.
5. Receive apply results after explicit approval.

## Core Flow (MVP)
1. The user pastes a JustPaste link to the agent.
2. The agent reads the link instructions and shows the user the skill list and descriptions.
3. The user selects the skill to apply.
4. The agent refetches the selected skill detail.
5. The agent performs setup for the current environment.
6. Before apply, the agent confirms scope (project/local) and overwrite behavior.

## MVP In Scope
- Instruction delivery: provide procedures the agent must follow
- Skill list/detail delivery: provide data required for selection and apply
- Safety confirmation flow: define required checks before apply
- Issue/label-based operating rules
- First apply playbook: keep question order and approval phrasing consistent

## MVP Out of Scope
- Hard-coded install adapters for each agent
- Complex web UI or account systems
- Long-term analytics dashboards

## Core Principles
- Let the agent handle format changes through real-time interpretation and apply, rather than server-side hard-coding.
- Validate quickly with small issues and small commits.
- Always confirm with the user before apply.
- On the first apply, prioritize a flow where the next question is obvious over dumping many options at once.

## Early Success Metrics
- Rate of reaching completed setup from a single link
- Time to first completed setup
- Apply failure rate (including retries)
- Number of extra explanation turns needed before the first dry-run

## Risks and Mitigations
- Risk: trust issues with external instructions
  - Mitigation: require explicit confirmation and force scope/overwrite questions before apply
- Risk: behavioral drift across agents
  - Mitigation: continuously strengthen contract documents (`contracts/`) and scenario examples
- Risk: higher drop-off on the first apply
  - Mitigation: lock question order and summary format around `docs/FIRST_APPLY_PLAYBOOK.md`
