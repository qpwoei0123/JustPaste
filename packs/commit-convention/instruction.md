# Commit Convention

## Goal
Standardize commit messages in conventional-commit format so the history stays easy to read.

## Agent Apply Instructions
1. Inspect the repository's existing commit style.
2. Present the base rule to the user:
   - format: `<type>(<scope>): <summary>`
   - example types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`
3. Ask the user for the apply scope:
   - project-only
   - global default
4. If an existing rule file is present, ask whether it should be overwritten.
5. Guide or apply the rule update in the selected scope, for example in `WORK_RULES.md` or `CONTRIBUTING.md`.
6. Finish by showing two sample commit messages.

## Done Criteria
- The user should be able to repeat the same format in the next commit.
