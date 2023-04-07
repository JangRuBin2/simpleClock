가상의 의뢰주로부터 웹 서비스 개발 의뢰를 수주 받았다.

의뢰주는 구두로 요구사항을 전달했다.

“인터넷에서 시계를 볼 수 있는 심플하고 화려한 어플을 만들어주세요.”

이것을 개발자 관점으로 해석한 형태는 다음과 같다.

웹 브라우저에서 시간정보가 렌더링 되는 애플리케이션이 주요 사안이다.
‘시계’라고 칭한 의뢰주의 의도는 연,월,일,시,분,초, 요일 정보까지 볼 수 있는 기능이 탑재 되어야 한다. (예 : 2023-4-7 오전 10시 40분 30초 금요일)
심플한 것을 요구하였기 때문에, 화면 정 가운데에 시간정보가 배치되는 것으로 디자인을 일단락하기로 했다.
가상의 동료가 접속량을 체크하는 모듈을 추가할 것이기 때문에, 정적페이지제작이 제한되고 서버사이드 렌더링(server-side rendering)방식을 요구한다.
모듈 사용 시, package.JSON 파일의 ‘초기화(initialize)’가 필요하다.
1초당 정보가 갱신되도록 조정하여 사용자(의뢰주)에게 ‘실시간’ 형태로 사용자경험을 유도한다.

기본요건을 충족한 기본 작업물 외에 본 작업자가 자유롭게 아이디어가 떠오른 것을 추가적으로 제작하여 역제안을 노려보기로 했다.
