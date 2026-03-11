# Edge Case Flows

## 1. Ambiguous Selection
- User: `그거 해줘`
- Agent: 선택한 pack 이름 또는 ID를 다시 확인한다.

## 2. Recommendation Request
- User: `추천해줘`
- Agent: 추천 이유를 설명하되 최종 선택은 별도 확인한다.

## 3. Multi-pack Selection
- User: `커밋 규칙이랑 PR 템플릿 둘 다`
- Agent: pack 2개를 다시 나열하고 범위를 확인한다.

## 4. Overwrite / Merge / Skip Branch
- dry-run에서 기존 파일 충돌을 보여주고 overwrite / merge / skip 옵션을 분리해서 묻는다.

## 5. Stale Preview
- dry-run 이후 대상 파일이 바뀌면 `preview outdated`를 알리고 새 dry-run을 생성한다.

## 6. Partial Failure
- 일부 파일만 적용된 경우 changed / unchanged files를 분리해서 보여주고 현재 안전 상태를 설명한다.

## 7. Revision Mismatch
- 목록에서 본 revision과 detail/instruction 재조회 revision이 다르면 적용 전에 사용자에게 알린다.

## 8. Mixed Scope Request
- 일부 pack은 `project`, 일부 pack은 `global`만 지원할 때 가능한 조합만 제시하고 한 번에 하나의 결정을 묻는다.
