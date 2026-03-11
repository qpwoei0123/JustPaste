# Risk Level & Confirmation Criteria

## Risk Layers
JustPaste는 두 단계 위험도를 사용한다.
- `declaredRisk`: pack metadata에 선언된 기본 위험도
- `effectiveRisk`: 실제 실행 계획 기준 최종 위험도

최종 확인 강도는 항상 `effectiveRisk`를 따른다.

## Base Criteria
- low: 조회/비파괴 계획. 기본 확인 생략 가능
- medium: 파일 생성/수정. 요약 + confirm 필요
- high: 삭제/덮어쓰기/광범위 변경/글로벌 쓰기. 요약 + dry-run + explicit yes 필요

## Escalation Rules
아래 중 하나라도 만족하면 `effectiveRisk`를 상향 조정할 수 있다.
- overwrite 발생
- delete 발생
- `global` scope write
- 민감 경로 수정
- 다수 파일 수정
- low-risk pack 여러 개 동시 적용
- dry-run 이후 파일 상태 변경

## Sensitive Paths
- `.github/*`
- `AGENTS.md`
- `WORK_RULES.md`
- `.claude/*`
- `.cursor/*`
- 전역 dotfile 및 사용자 홈 설정 파일

## Approval Strength
- low: 생략 가능
- medium: 요약 + confirm
- high: dry-run + explicit yes

## Explicit Yes Examples
허용 예시:
- `yes, apply`
- `yes, overwrite and apply`
- `global scope로 적용해`

비허용 예시:
- `ㅇㅇ`
- `ㄱㄱ`
- `진행`
- `좋아`
