src 디렉터리 구조

├─asset ( 정적인 자원 )<br/>
├─common ( 공통 모듈 )<br/>
│  └─api ( axios default 설정 )<br/>
├─components<br/>
│  ├─atoms ( 자주 쓰이는 아주 조그만 단위 ex, Button Components.. )<br/>
│  ├─blocks ( atoms 보다 큰 단위 )<br/>
│  ├─config ( 설정 현재는 Responsive config.. )<br/>
│  └─pages<br/>
│      ├─Infomation<br/>
│      ├─Layout<br/>
│      └─Login<br/>
├─ducks ( redux config.. )<br/>
└─styles ( CSS in JS )<br/>
    ├─atoms<br/>
    ├─blocks<br/>
    ├─common<br/>
    └─pages<br/>
        ├─infomation<br/>
        ├─layout<br/>
        └─login<br/>

< WHY CSS in JS ? > 

1. 스타일시트의 묶음을 유지보수 할 자원을 할당하고 싶지 않음.

2. 복잡한 애플리케이션 내에서 선택자 충돌을 피할 수 없는 경우가 있고 BEM과 같은 네이밍 컨벤션은 한 프로젝트 내에서는 도움이 되지만, 서드파티 코드를 통합할 때는 도움이 되지 않는다. 따라서 CSS를 컴파일 할 때, 기본적으로 고유한 이름을 생성 하는 방식을 채택.

3.흔히 사용하는 Sass 는 파일이 늘어날수록 관리도 쉽지않고 문어다발식 import가 될 시 빌드 시간도 비약적으로 늘어날 뿐더러 애초에 관리를 해야된다는 리소스 자체가 부담
