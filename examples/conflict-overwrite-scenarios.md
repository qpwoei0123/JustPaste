# Conflict & Overwrite Scenarios

## Scenario 1: Existing file conflict
- Agent detects existing file and asks overwrite/merge/skip.
- User chooses merge.
- Agent previews merged output then applies.

## Scenario 2: Forced overwrite
- Agent marks high risk and shows dry-run.
- User gives explicit yes.
- Agent overwrites and provides rollback hint.
