// case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하시오.'));
    switch(input % 2){
        case 0:
            alert("짝수");
            break;
        case 1:
            alert("홀수");
            break;
        default:
            alert("잘못 입력된 값");
            break;
    }
}

// todo. if에서 풀었던 lotto 과제를 switch 문법으로 변형
function lotto(){
    var lottoNumber = Number(prompt("숫자를 입력하세요."));
    switch(lottoNumber){
        case 1:
            alert("1등! 10억!");
            break;
        case 2:
            alert("2등! 5천!");
            break;
        case 3:
            alert("3등! 3백!");
            break;            
        default:
            alert("낙첨ㅠㅅㅠ");
            break;    
    }
}

// case.2 switch문을 이용한 계산기 
function calculator(){
    var firstNumb = Number(prompt("첫 번째 숫자를 입력하세요."));
    var operator = prompt("사칙 연산자 중 하나를 입력하세요. (+, -, *, /)");
    var lastNumb = Number(prompt("두 번째 숫자를 입력하세요."));

    switch(operator){
        case "+":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb+lastNumb));
            break;
        case "-":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb-lastNumb));
            break;
        case "*":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb*lastNumb));
            break;
        case "/":
            console.log(firstNumb + operator + lastNumb + " = " + (firstNumb/lastNumb));
            break;
        default:
            console.log("입력된 값에 오류가 있습니다.")
            break;
    }
}