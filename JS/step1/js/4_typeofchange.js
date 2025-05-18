//case.1 자신의 나이를 입력받고 20을 더한 값 출력
function agePlus(){
    var age = Number(window.prompt("현재 나이를 입력하시오."));
    // var result = Number(age) + 20;
    var result = age + 20;
    console.log(typeof(age)); // age > result의 age가 아닌 prompt의 age
    console.log(result);
}

// case.2 강제 숫자 - 문자 형변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 20;
    console.log("result 변수의 최종 자료형은 " + typeof(result) + " 담긴 값은 " + result + " 입니다" );
}

// case.3 강제 불린 - 숫자 형변환
function forcedNumber(){
    var result = 2 + true;
    console.log("result 변수의 최종 자료형은 " + typeof(result) + " 담긴 값은 " + result + " 입니다" );
}

// case.4 강제 불린 - 문자형 변환
function forcedString2(){
    var a = '2';
    var result = a + true;
    console.log("result 변수의 최종 자료형은 " + typeof(result) + " 담긴 값은 " + result + " 입니다" );
}

// case.5 test1에 들어있는 숫자를 문자로 명시적 형변환
function stringNumb(){
    var test = 15;
    console.log("변환 전: " + typeof(test) + " = " + test);
    var result = String(test);
    console.log("변환 후: " + typeof(result) + " = " + result);
}

function string2Numb(){
    var test = 15;
    console.log("변환 전: " + typeof(test) + " = " + test);
    var result = test.toString();
    console.log("변환 후: " + typeof(result) + " = " + result);
}

// case.5 - 1 randomBackgroundColor
function bgColorRandom(){
    setInterval(() =>{
        var bgColor = Math.random()*0xfff;
        // ? 0x = 16진을 의미 = 15*16^3 + 15*16^2 +  15*16^1 + 15*16^0 - 최대수치를 입력한것
        // ! 2진 표현시 0000 0000 0000 0000 1111 1111 1111 1111 -> 실사용불가 -> 변환.
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log(bgColor);
        document.querySelector("body").style.backgroundColor="#"+bgColor;
    },1000);
}

function fixtoNumb(){
    var pi = 3.14159265359;
    console.log("변환 전: " + typeof(pi) + " = " + pi);
    var result = pi.toFixed(2);
    console.log("변환 후: " + typeof(result) + " = " + result);
}

// *case.6 test에 들어있는 문자를 숫자로 형변환.
function numbString(){
    var test = '300.15625';
    console.log("변환 전: " + typeof(test) + " = " + test);
    // var result = Number(test) + 20;
    var result = parseFloat(test);
    console.log("변환 후: " + typeof(result) + " = " + result);
}
// todo1. 변수 test에 들어있는 숫자 100을 문자형으로 변환. result로 출력(typeof 검수 필요) String을 이용한 문자형 변환
function todo1(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + " = " + result);
}

// todo2. toString을 이용한 문자형변환
function todo2(){
    var test = 100;
    var result = test.toString();
    console.log(typeof(result) + " = " + result);
}

// 암시적 형변환을 이용한 문자형변환
function todo3(){
    var test = 100;
    var result = "" + test; // 생각보다 많이 쓰는 방법
    console.log(typeof(result) + " = " + result);
}

//  문자형을 숫자로 변환. 마찬가지로 typeof 검수 필요
function todo4(){
    var test = '100.51';
    var result = parseFloat(test) + 150 + parseInt("20");
    console.log(typeof(result) + " = " + result);
}

// 위 상황을 number 전역함수로 대체한다면?
function todo5(){
    var test = '100.51';
    var result = Number(test) + 150 + Number("20");
    console.log(typeof(result) + " = " + result);
}