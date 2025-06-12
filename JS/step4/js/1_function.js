// case.1 다음 구문을 hello라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// 1-1.수동반복
// document.write("안녕");
// document.write("안녕");
// document.write("안녕");

// 1-2. 반복문을 사용
for(var i = 0; i < 5; i++){
    document.write(" hello? welcome!" + "<br>");
}

// 1-3 원할 때만 실행하기 위해 함수화
function commentFunc(){
    var comment = "hello? welcome!"
    for(var i = 0; i < 5; i++){
        document.write(comment,"<br>");
    }
}

// case.2 매개변수(parameter/인자/인수(즉, 괄호 안에 있는 아이))가 있는 함수 만들기
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment, "<br>");
    }
}
function sumParam(num1, num2){
    var result = num1 + num2;
    alert("두 수의 합은? = " + result);
}

// case.3 매개변수가 없어도 있는 것처럼 사용하는 가변인자함수(arguments)- 배열인듯 배열아닌 배열같은 
function sum(){
    console.log(typeof(arguments) + ':' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}

// case.4 "자신의 이름"의 나이는 "자신의 나이" 세입니다. 를 arguments를 이용해 만들어 보기 
function showinfo(){
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다");
    // 매개변수 순서를 제대로 잘 입력해야함
    // 배열은 데이터 순서 변경이 가능하나 arguments는 수정 및 변경이 불가하다
    // 그렇기 때문에 내부에서 해당 case를 감지하고 조정할 수 있는 logic이 필요
    console.log("index 0 = " + arguments[0] + "type : " + typeof(arguments[0]));
    console.log("index 1 = " + arguments[1] + "type : " + typeof(arguments[1]));
}
function showinfo2(){
    var i = 0;
    switch (typeof(arguments[0])){
        case "string":
            i = 1;
            break;

        case "number":
            i = 0; 
            break;
    }
    alert(arguments[1 - i] + "의 나이는" + arguments[i] + "세 입니다");
}
function f(x){
    return x*x; // return은 미리 결과를 알려줌 콘솔창에는 미리 결과가 출력되나 확정은 엔터쳐야 됨
}
/* 
console.log(f(3));
alert(f(6));
document.write(f(9));
*/

// case.5 위 sum 함수를 return으로 변형해보기
function sumAllEx(){
    var willReturn = 0;
    // for(var i = 0; i < arguments.length; i++) 
    for(var i in arguments){ // for in 반복문 - IE9 이상에서만 사용 가능
        willReturn += arguments[i];
    }
    return willReturn;
}

// case.6 retureValue를 변수에 저장하고 전달하기
function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result;
}
var testValue = sumReturn1(13,26);
// 함수를 담았는지 함수 실행식을 담았는지 꼭 구분할 것
/* 
console.log(testValue);
alert(testValue);
document.write(testValue);
*/

// case. 7 다음 실행구문으로 전달받은 매개변수를 계산하여 결과 출력하는 함수 만들기.
/*
    //* coding Test 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10) + "<br>");
    document.write("2 결과 =" + calculator("-", 20, 10) + "<br>");
    document.write("3 결과 =" + calculator("*", 20, 10) + "<br>");
    document.write("4 결과 =" + calculator("/", 20, 10) + "<br>");
    document.write("5 결과 =" + calculator("%", 20, 10) + "<br>");
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
    
    - 단서 
    1. 함수 이름은 calculator
    2. 고정 인자는 세 개다 
*/
function calculator2(op,num1,num2){
    var result = '';
    switch(op){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = sub(num1, num2);
            break;
        case "*":
            result = mul(num1, num2);
            break;
        case "/":
            result = div(num1, num2);
            break;
        default:
            result = "잘못된 연산자입니다.";
            break;
    }
    return result; 
}
function add(num1, num2){
    var addResult = num1 + num2;
    return addResult;
}
function sub(num1, num2){
    var subResult = num1 - num2;
    return subResult;
}
function mul(num1, num2){
    var mulResult = num1 * num2;
    return mulResult;
}
function div(num1, num2){
    var divResult = num1 / num2;
    return divResult;
}
/*
    이번 수업의 핵심: 자바스크립트에서 함수는 다른 값(숫자, 문자열, 불리언, 객체 등)들처럼 취급될 수 있다.
    함수를 값처럼 다룰 수 있다는 것! 그 말은 즉슨 다음과 같은 일들이 가능해진다는 것
        1. 함수를 변수에 할당할 수 있게 됨
        2. 함수 자체를 다른 함수의 인자(매개변수)로 전달할 수 있게 됨
        3. 다른 함수에서 결과값(반환값)으로 함수 자체를 돌려줄 수 있게 됨
    어제: return을 통해 함수의 실행 결과를 변수에 담는 방식
    오늘: 함수 그 자체를 변수에 담아서 나중에 실행할 수 있게 만드는 방식
    + 매개변수는 진입하는 곳과 사용되는 곳의 위치만 같으면 되는 것이지 꼭 이름이 동일할 필요는 없음
*/

// case.8 함수를 변수에 담기
function hello(name){
    console.log(name + "님. 환영합니다.");
    return name + "님. 환영합니다."; 
}
var func = hello;
/* 
    - hello라는 함수 자체를 func이라는 변수에 할당하는 것. func라는 변수를 통해 hello 함수의 기능을 다른 곳으로 전달하거나 사용할 수 있게 됨
    - var func = hello; / var func = hello(); 의 차이
        : 전자는 함수를 담는 것이고 후자는 함수의 결과를 담는 것
        - hello()처럼 괄호를 붙이면 함수가 실행되고 그 결과값이 func에 담기겠지만, 괄호 없이 hello만 쓰면 함수 자체를 의미함 
        > 왜 이러한 차이가 생길까? 
        - (): 함수 호출 연산자 "함수를 호출해라"라는 의미로, () 사용 시 함수는 즉시 실행되며, 그 반환값이 계산되어 func에 저장됨
*/
/* case.8 복습 추가 예제 및 핵심
function morning(name){
    console.log("좋은 아침, " + name);
}

function evening(name){
    console.log("편안한 저녁, " + name);
}
var current;
if(new Date().getHours() < 12){
    current = morning;
}else{
    current = evening;
}
current("Hana");
// 동적으로 함수 교체가 가능 > current 변수가 상황에 따라 morning 또는 evening 함수를 가리키도록 바뀔 수 있게 되는 것
*/

// case.9 매개변수에 함수를 담기 
function hi1(){
    // return "hello?";
    console.log("hello?");
}
function hi2(){
    // return "안녕?";
    console.log("안녀엉?");
}
function execute(func){
    func();
}
/* case.9 핵심: 콜백 함수(+중개 함수)
    - 콜백 함수
        : 함수를 다른 함수의 인자로 전달할 수 있음. 함수를 매개변수로 전달해서, 특정 시점에 그 함수를 나중에 실행하는 구조 > 나중에 이 일 좀 처리해줘! 이런 느낌
        + 콜백 함수를 사용하는 이유
            1. 일반화된 로직 작성 가능: execute 함수는 어떤 함수가 오든(hi1, hi2 등) 동일한 방식으로 "전처리 -> 전달받은 함수 실행 -> 후처리" 같은 로직을 수행할 수 있음. 매번 다른 함수를 위한 executeForHi1, executeForHi2 같은 함수를 만들 필요가 없다는 것
            2. 비동기 작업 처리: 시간이 오래 걸리는 작업(예: 서버에서 데이터 가져오기, 큰 파일 읽기)을 할 때 콜백이 필수적. 만약 콜백이 없다면, 작업이 끝날 때까지 프로그램 전체가 멈춰버릴 수 있음(동기적 방식). 그러나 콜백을 사용하면, "데이터 가져오기가 끝나면 이 함수(콜백)를 실행해줘"라고 등록해두고, 프로그램은 다른 일을 계속 할 수 있게 됨 (비동기적 방식).
    - 중개 함수
        : 콜백 함수를 받아서 실행하는 함수, 즉 콜백 함수의 실행을 중개하는 역할을 하는 함수를 지칭하는 것
    - 중개 함수와 콜백 함수의 관계
        : 중개 함수는 "주문 처리 시스템"이고, 콜백 함수는 "처리할 특정 주문 내용"과 같
*/

//case.10 
function welcome(){
// 1. welcome이라는 함수 선언
    alert("환영합니다.");
}
$(document).ready(function(){
    $("#case10").click(welcome);
    // 2. 브라우저는 사용자가 버튼을 클릭하는 등의 이벤트를 감지
    // 3. $("#case10").click(welcome); > HTML 문서에서 id가 case10인 요소를 클릭 이벤트가 발생하면, 그때 welcome 함수를 실행하라는 뜻
    // 4. 사용자가 실제로 버튼을 클릭하면 브라우저는 약속대로 welcome 함수를 콜백해줌
});
// 5. 여기서 welcome 함수는 click 이벤트가 발생했을 때 "나중에 호출될" 콜백 함수인 것이고 jQuery의 click 메소드가 welcome 함수를 인자로 받은 것

/* case 10 핵심: welcome 함수를 click 이벤트의 콜백으로 전달
    - $(document).ready( ... ); > "HTML 문서가 모두 로드되면 ... 안의 함수를 실행하라"는 의미의 jQuery 코드
    - function() > 이 익명함수 자체가 $(document).ready의 콜백함수
    - $("#case10") > HTML에서 id가 "case10"인 요소를 선택하는 jQuery 코드
    - .click(welcome) > "선택된 요소가 클릭되면 welcome 함수를 실행하라"는 의미
*/ 

// case.11 return Value로 함수를 전달하기
function createHello(){
    function hello(user){
        // 1. createHello 함수 안에 hello 라는 또 다른 함수가 정의되어 있음(이를 내부 함수 또는 중첩 함수라고 함)
        document.write(user + ", welcome!");
    }
    return hello; // 핵심: hello 함수 자체를 반환
}
var result = createHello();
// 2. createHello 함수는 실행되면, hello 함수 자체를 반환
// 3. var result = createHello(); 코드가 실행되면, result 변수에는 createHello가 반환한 hello 함수가 담기게 되는 것
// 4. 그래서 result("박하늘")을 호출하면, 실제로는 createHello 안에 있던 hello 함수가 실행되는 것

/* case.11 핵심: 고차함수
    - 고차 함수
        : 다른 함수를 인자로 받거나, 함수를 결과로 반환(return)하는 함수
    - createHello 함수를 실행하면, 그 결과로 hello 함수가 반환되어 result 변수에 담김
    - 이제 result는 hello 함수와 같음
    - result("박하늘"); // document에 "박하늘, welcome!" 출력
*/ 