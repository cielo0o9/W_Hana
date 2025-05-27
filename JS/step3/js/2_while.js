//case.1 패스워드 1234가 입력되면 '접속승인' 아니면 '잘못 입력하셨습니다'
function pwCheck(){
    while(true){ // 1. 무한 루프 시작 
        var value = window.prompt("비밀번호를 입력하세요.");
        // 2. 사용자에게 비밀번호 입력창을 띄움
        if(value == 1234){ // 3. 입력받은 값(value)이 1234와 같은지 비교
            // 왜 타입 변환이 되는 건지지
            alert("접속승인"); // 4. 같다면 "접속승인" 알림창 표시
            break; // 5. 무한 루프 탈출 (escape logic)
        }else{ // 6. 같지 않다면
            alert("잘못입력하셨습니다."); // 7. "잘못입력하셨습니다." 알림창 표시
        }
        // 8. else 블록이 끝나면 다시 while(true)의 처음으로 돌아가 반복
    }
}

//* exp.2 while Continue
function whileContinue(){
    var i=1;
    while(i<=10){ //? 총 10회 반복
        i++; //? i 초기값부터 10번증가
        continue; 
        // while 루프 내 continue 아래에 있는 모든 코드를 건너뛰고, 루프의 다음 반복으로 바로 넘어감 (즉, while(i<=10) 조건 검사 부분으로)
        document.write(i+"<br>"); //따라서 이 줄은 실행될 수 없음
    }
    document.write("최종 i = "+ i + "<br>"); //? 최종결과만 출력.
}

//* exp.3 while Break
function whileBreak(){
    var i = 1;
    while(i<=10){//? 총 10회 반복
        break;//? for문과 마찬가지로 break로 인해 루프 실행불가.
        i++;
        document.write(i+"<br>");
        // 이 두 줄은 절대 실행되지 않음
    }
    document.write("최종 i = "+ i + "<br>"); //? 최종결과만 출력.
}
//todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되어어야함. 
