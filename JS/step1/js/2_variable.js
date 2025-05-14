// case.1 변수(전역) 만들기
var userName; 

// case2. 변수 선언 및 초기화
var userAge = 45; 

// case3. 동시 선언 및 초기화
var radius, pi;
radius = 10, pi = 3.141592; 
// var radius = 10, pi = 3.141592;(x) > 중복 선언 금지

// case.4 변수의 특성
var cup = 'coffee';
cup = 'Tea'; 
cup = 'juice';
// 위처럼 작성(x). 변수는 꼭 하나여야만 함

// case.5 연산자 사용시 
var numbVal = 10;
// numbVal + 20; > 처리까지만 동작하고 출력이 없음(결과 10 도출)
// console.log(numbVal + 20); > 처리 후 출력까지 진행(결과 30 도출)
numbVal = numbVal + 20; // numbVal += 20;(20을 더해서 대입해라)

var cliAge = 24;
console.log("제 나이는 현재 " + cliAge +"세 이고,");
cliAge += 20;
console.log('20년 뒤에는 ' + cliAge + '세 입니다.'); 