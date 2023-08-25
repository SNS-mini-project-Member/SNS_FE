## src 디렉터리 구조

├─asset ( 정적인 자원 )<br/>
├─common ( 공통 모듈 )<br/>
│&nbsp;&nbsp;└─api ( axios default 설정 )<br/>
├─components<br/>
│&nbsp;&nbsp;├─atoms ( 자주 쓰이는 아주 조그만 단위 ex, Button Components.. )<br/>
│&nbsp;&nbsp;├─blocks ( atoms 보다 큰 단위 )<br/>
│&nbsp;&nbsp;├─config ( 설정 현재는 Responsive config.. )<br/>
│&nbsp;&nbsp;└─pages<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─Infomation<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─Layout<br/>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─Login<br/>
├─ducks ( redux config.. )<br/>
└─styles ( CSS in JS )<br/>
&nbsp;&nbsp;&nbsp;├─atoms<br/>
&nbsp;&nbsp;&nbsp;├─blocks<br/>
&nbsp;&nbsp;&nbsp;├─common<br/>
&nbsp;&nbsp;&nbsp;└─pages<br/>
&nbsp;&nbsp;&nbsp;├─infomation<br/>
&nbsp;&nbsp;&nbsp;├─layout<br/>
&nbsp;&nbsp;&nbsp;└─login<br/>

< WHY CSS in JS ? > 

* 스타일시트의 묶음을 유지보수 할 자원을 할당하고 싶지 않음.

* 복잡한 애플리케이션 내에서 선택자 충돌을 피할 수 없는 경우가 있고 BEM과 같은 네이밍 컨벤션은 한 프로젝트 내에서는 도움이 되지만, 서드파티 코드를 통합할 때는 도움이 되지 않는다. 따라서 CSS를 컴파일 할 때, 기본적으로 고유한 이름을 생성 하는 방식을 채택.

* 흔히 사용하는 Sass 는 파일이 늘어날수록 관리도 쉽지않고 문어다발식 import가 될 시 빌드 시간도 비약적으로 늘어날 뿐더러 애초에 관리를 해야된다는 리소스 자체가 부담


< styled-components 사용하지 않은 이유 >

* 양방향 종속성: 스타일과 컴포넌트가 하나의 파일 안에 함께 정의되기 때문에, 스타일을 재사용하려면 해당 컴포넌트와 함께 가져와야 합니다. 이로 인해 스타일 파일의 재사용성이 감소할 수 있습니다.

* 런타임 성능 비용: styled-components는 런타임에서 스타일을 삽입하고 관리하기 때문에, 컴포넌트가 렌더링될 때 스타일이 적용됩니다. 이로 인해 일부 렌더링 성능 비용이 발생할 수 있습니다.

* 컴포넌트와 스타일의 분리 어려움: 대부분의 경우, 컴포넌트와 스타일을 분리해서 유지하면 코드를 더 관리하기 쉽고 가독성이 좋아집니다. 하지만 styled-components를 사용하면 컴포넌트와 스타일이 하나의 파일 안에 정의되므로, 이 분리를 어려울 수 있습니다.

< Tailwind CSS 사용하지 않은 이유 >

* HTML에 클래스 오버로딩: 테일윈드를 사용하다보면 HTML 요소에 여러 클래스를 추가하는 것이 일상화됩니다. 이로 인해 HTML 코드가 매우 길어지고 가독성이 떨어질 수 있습니다.

* 커스터마이징의 한계: 테일윈드는 미리 정의된 클래스를 사용하므로 커스텀 스타일링을 적용하려면 추가적인 CSS 작업이 필요합니다. 때로는 특정한 디자인 요구사항을 구현하기 위해 많은 커스터마이징이 필요할 수 있습니다.

* 스타일 충돌 가능성: 테일윈드는 클래스명을 사용하여 스타일을 정의하므로, 다른 라이브러리나 프레임워크와 함께 사용할 때 클래스명 충돌이 발생할 수 있습니다. 이를 방지하기 위해 클래스명을 접두어로 구분하는 등의 추가 작업이 필요할 수 있습니다.

* 디자인 일관성의 어려움: 테일윈드를 사용하는 여러 개발자가 각자 다른 방식으로 클래스를 조합하면 결과적으로 디자인의 일관성이 어려워질 수 있습니다.


< JWT token 을 localStorage & cookie 저장의 차이 >

### localStorage

* CSRF 공격에는 안전하다.

그 이유는 자동으로 request에 담기는 쿠키와는 다르게
js 코드에 의해 헤더에 담기므로 XSS를 뚫지 않는 이상
공격자가 정상적인 사용자인 척 request를 보내기가 어렵다.

* XSS에 취약하다.
* 
공격자가 localStorage에 접근하는 Js 코드 한 줄만 주입하면
localStorage를 공격자가 내 집처럼 드나들 수 있다.

### cookie

* XSS 공격으로부터 localStorage에 비해 안전하다.

쿠키의 httpOnly 옵션을 사용하면 Js에서 쿠키에 접근 자체가 불가능하다.
그래서 XSS 공격으로 쿠키 정보를 탈취할 수 없다.

* CSRF 공격에 취약하다.
* 
자동으로 http request에 담아서 보내기 때문에
공격자가 request url만 안다면
사용자가 관련 link를 클릭하도록 유도하여 request를 위조하기 쉽다.

### 그래서 ?

refresh token을 사용하는 방법이 있다.

이런 방식을 사용하는 경우,
refresh token이 CSRF에 의해 사용된다 하더라도
공격자는 accessToken을 알 수 없다.

CSRF는 피해자의 컴퓨터를 제어할 수 있는 것이 아니기 때문이다.
요청을 위조하여 피해자가 의도하지 않은
서버 동작을 일으키는 공격방법이기 때문에
refresh token을 통해 받아온 response(accessToken)는
공격자가 확인할 수 없다.

따라서 쿠키를 사용하여 XSS를 막고
refresh token 방식을 이용하여 CSRF를 막을 수 있다.


