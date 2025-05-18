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
    alert(number);
}