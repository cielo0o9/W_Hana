// case.1 10이 저장된 변수 a, 숫자 20, 그리고 문자 "30"을 더해서 result 변수에 저장 후 출력.
function numbOP1(){
    var a  = 10;
    var result = a + 20 + parseInt("30");
    console.log("합산 : " + result);
}
// case.2 50이 저장된 변수 a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장 후 출력
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log("복합연산 : " + result);
}
// case.3 'hi'가 담긴 변수 a 와 'WEB'이담긴 변수 b를 합쳐 'hi WEB'을 console 에 출력.
function stringOP(){
    var a = 'hi';
    var b = 'WEB';
    console.log(a + b);
}
// case.4 ul,li구조의 tag를 html페이지에 삽입 및 출력 해보자.
function operatorEX(){
    var list = '';
    list += '<ul>';
    list += '   <li>안농?</li>';
    list += '   <li>스크립트야?</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// case.5 연산자가 뒤로 올 경우를 예상해보기
function numberPlusAfter(){
    var number = 10;
    alert(number++); //? 예상 되는 값 : 11 / 10
    alert(number++); //? 예상 되는 값 : 12 / 11
    alert(number++); //? 예상 되는 값 : 13 / 12
    // 하지만 최종 13으로 마무리 되고 우리가 확인할 수 없음.
    console.log(number);
}
// case6. 연산자가 앞으로 올 경우 예상해보기
function numberPlusBefore(){
    var number = 10;
    alert(++number);
    alert(++number);
    alert(++number);
    console.log(number);
}
// todo 증감연산자 복합결과 예상하기
function numberPlusTodo(){
    var number = 10;
    console.log(number++); 10 / 11
    console.log(--number); 10
    console.log(++number); 11
    console.log(number--); 11 / 10
    console.log(number++); 10 / 11
    console.log(++number); 12
    console.log(--number); 11
    console.log(number++); 11 / 12
    console.log(++number); 13
    console.log(number); 13
}

// case.7 다음 코드를 증감 연산자를 이용하여 간소화
function numberOperator(){
    var a = 10;
    // a = a + 1;
    // a += 1;
    // a -= 1;
    // a *= 1;
    a /= 1;
    console.log("a = " + a);
}

// case.8 숫자 10이 담긴 변수 a와 20이 담긴 변수 b의 크기를 비교해봐
function compareOp1(){
    var a = 10;
    var b = 20;
    var result = a < b;
    console.log("a가 b보다 작나요? " + result);
    // result의 비교연산자가 바뀌면 문장도 수정되어야 함
}

// case.9 숫자 10이 담긴 변수 a, 20이 담긴 변수 b가 같은지 비교하여 결과를 출력
function compareOp2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log("a = b 인가요? " + result);
}

// case.9 숫자 10이 담긴 변수 a, 20이 담긴 변수 b의 올바른 비교식을 세워라
function compareOp3(){
    var a = 10;
    var b = 20;
    var result = a != b;
    console.log("a와 b가 다른가요? " + result);
}

// case.11 a변수에는 '여자', b변수에는 '웹 디자이너'라는 값이 저장되어 있다. 담겨있는 두 값이 모두 맞는지 점검
function logicalOp1(){
    var a = '여자';
    var b = '웹퍼블리셔';
    // var result = (a == "여자");
    // var result = (b == "웹 디자이너");
    var result = (a == "여자")&&(b == "웹디자이너");
    console.log("result = " + result);
    // 아이디와 패스워드가 일치하는지의 식을 세울 때 사용
}

// case.11 a변수에는 '남자', b변수에는 '웹 퍼블리셔'라는 값이 저장되어 있다. 담겨있는 두 값 중 하나라도 맞는지 점검
function logicalOp2(){
    var a = '남자';
    var b = '웹디자이너';
    var result = (a == "남자")||(b == "웹퍼블리셔");
    console.log("result = " + result);
}
// todo. 다음 코드의 잘못된 결과가 올바르게 출력될 수 있도록 해보기 
function compareTodo(){
    console.log(30 > 20 > 10);
    // console.log(30 > (20 > 10));
    console.log((30 > 20) && (20 > 10));
    // 1. 컴퓨터는 한 번에 한 개만 처리 가능
    // 2. 30과 20의 비교를 먼저 처리 > true
    // 3. true > 10 을 비교 (암시적 형변환)
    // 4. 암시적 형변환 후 1 > 10을 비교 > false
}