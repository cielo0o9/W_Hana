//case.1 자신이 가장 좋아하는 숫자를 favorNumber 변수에 담아 자료형을 check
function testTypeof(){
    var favorNumber = 8;
    console.log("favorNumberDataTypeof = " + typeof(favorNumber));
}

// case.2 자신의 영어 이름을 engName변수에 담아 자료형을 check
function TextTypeof(){
    var engName = "Hana";
    console.log("내 영문 이름의 자료형은? = " + typeof(engName));
}

// case.3 현재 자신의 상태가 추운지(true) 아닌지(false)를 cold 변수에 담아 자료형을 check
function check1(){
    var cold = false;
    console.log("추위를 느끼고 있나? " + cold + "(" + typeof(cold) + ")");
}

// case.4 로그인 상태를 loginStatus ㅁ변수에 담아 자료형을 출력 및 점검
function check2(){
    var loginStatus;
    console.log("로그인 된 상태인가? " + loginStatus + "(" + typeof(loginStatus) + ")");
    loginStatus = false;
    console.log("로그인 된 상태인가? " + loginStatus + "(" + typeof(loginStatus) + ")");
    loginStatus = true;
    console.log("로그인 된 상태인가? " + loginStatus + "(" + typeof(loginStatus) + ")");
}

// todo.5 test 변수를 선언하고 초기화 하지 않은 상태에서 자료형을 check 해보자.
function check3(){
    var test;
    // ex > 초기화 하지 않은 변수의 자료유형은? = 자료유형 입니다.
    console.log("초기화 하지 않은 변수의 자료유형은 " + typeof(test) + "입니다.");
}

// todo.6 obj 변수에 객체를 담을 예정이니 null로 초기화해서 자료형을 check 해보자.
function check4(){
    var obj = null;
    // ex > obj의 자료유형은? = 자료유형 입니다.
    console.log("obj에 담긴 값의 자료유형은 " + typeof(obj) + "입니다.");
}
