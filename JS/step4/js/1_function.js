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