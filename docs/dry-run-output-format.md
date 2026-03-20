# Dry-run Output Format (v2)

```text
[DRY-RUN]
summary: <what will change>
sourceRevision: <pack revision used for planning>
scope: <project|global>
declaredRisk: <low|medium|high>
effectiveRisk: <low|medium|high>
create: <files>
update: <files>
delete: <files>
merge: <files>
diffSummary: <1-line summary per changed file or logical change>
overwriteRisk: <none|possible|confirmed>
rollback: <how to revert>
blockingIssues: <items that must be resolved before apply>
previewFingerprint: <fingerprint for stale preview detection>
```

## Rules
- Compute the dry-run against the same candidate files that would be used for the real apply.
- Regenerate the dry-run whenever scope, selection, or overwrite options change.
- If file state no longer matches `previewFingerprint` right before apply, stop apply.
- For medium/high risk, show the dry-run result before asking for approval.
