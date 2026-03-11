# Pack Lifecycle

## Canonical Source
- `packs/index.json`
- `packs/*/pack.json`
- `packs/*/instruction.md`
- `packs/*/CHANGELOG.md`

`site/api/v1/*`는 generated artifact다.

## Lifecycle
1. authoring
   - pack metadata와 instruction을 작성한다.
2. validation
   - metadata와 generated artifact를 검증한다.
3. version / revision update
   - 변경 범위에 맞게 version 또는 revision 정책을 반영한다.
4. API generation
   - `site/api/v1/*`를 생성한다.
5. snapshot / schema check
   - generated output을 검증한다.
6. publish
   - GitHub Pages에 반영한다.
7. deprecate / archive / remove
   - deprecated 상태와 제거 정책을 기록한다.

## Policy
- 사람이 직접 수정하는 기준 데이터는 `packs/*`다.
- generated artifact는 수동 수정하지 않는다.
- schema / docs / generated output은 같은 계약을 따라야 한다.
