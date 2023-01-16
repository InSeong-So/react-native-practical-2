버튼을 직접 구축할 수 있다. 오히려 이런 방법을 더 많이 사용한다.
- 버튼 구축에서 가장 중요한 것은 React-native의 핵심 컴포넌트를 결합하는 것

React-Native는 box-shadow가 없다.
- android: elevation 프로퍼티 추가, 높은 수 일수록 진하게 나옴
- iOS: shadowColor, shadowOffset, shadowRadius, shadowOpacity 등의 프로퍼티로 정의

TextInput 컴포넌트에 문자 길이를 제한하고 싶다면 maxLength는 잘못되었다.
- 숫자 타입을 사용하는 자리에 문자 타입을 사용했기 때문이다.

TextField 구성하기
- 모바일 기기의 키보드를 제어해야 한다면 keyboardType 프로퍼티를 사용한다.
- autoCapitalize는 자동 수정을 지원하는 프로퍼티

최근에는 Touchable 보다는 Pressable을 권장한다.

일반적으로 커스텀 컴포넌트는 외부/내부 컨테이너를 결합하여 작성한다.
- 스타일 객체는 단일 변수 또는 배열로도 지정할 수 있다.

배경색을 일괄적으로 적용하고 싶다면 App.js에서 작성하면 된다. View 컴포넌트에 StyleSheet로 적용할 수도 있지만...
- 선형 그라데이션을 적용하고 싶다면 Expo에서 만든 expo-linear-gradient 패키지를 사용해보자.

ImageBackground는 전경이 아닌 배경에 이미지를 렌더링한다.
- 이미지 크기는 resizeMode를 사용한다.
- ImageBackground도 결국 View와 Image의 조합이다.

경고창은 React-Native가 처리한다.
- Alert 컴포넌트를 import 해서 사용
- Alert은 prompt, alert이 존재함. 각 인자는 타이틀, 메세지, 버튼과 그 외 옵션으로 구성된다.