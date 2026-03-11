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
- dry-run은 실제 apply 후보 파일과 같은 기준으로 계산한다.
- scope, selection, overwrite option이 바뀌면 dry-run을 재생성한다.
- apply 직전 파일 상태가 `previewFingerprint`와 다르면 apply를 중단한다.
- medium/high risk에서는 dry-run 결과를 승인 전에 보여준다.
