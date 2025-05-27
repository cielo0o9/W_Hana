// case.1 이름을 10번 출력해보자
function namePrint10(){
    var userName = "Hana";
    for(var i = 1; i <= 10; i++){
        console.log(i + '. ' + userName);
    }
}

// case.1 이름을 1000번 출력해보자
function namePrint1000(){
    var userName = "Hana";
    for(var i = 1; i <= 1000; i++){
        console.log(i + '. ' + userName);
    }
}

// todo. 위 1,000번 출력 예제에서 홀수 번째만 출력 될 수 있도록 반복문을 짜오기
function namePrint500(){
var userName = "Hana";
    for(var i = 1; i <= 1000; i++){
        if(i % 2 == 1){
            console.log(i + '. ' + userName);
        }
    }
}

//case.3 자신이 좋아하는 과일 네 개를 배열로 배치하고 alert로 출력
function favorFruit(){
    var data = ["망고스틴", "씨 없는 수박", "딸기", "망고", "샤인머스켓"];
    // console.log(data[4]);
    for(var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
    // this: 자신을 의미
}

//todo. 지금까지 배웠던 js 단원을 다음 화면과 같이 출력해보기
function arrayFor(){
    var data = ["변수", "형 변환", "연산자", "조건문 if", "조건문 switch", "반복문 for", "반복문 while"];
    var swapNumb = ["첫", "두", "세", "네", "다섯", "여섯", "일곱"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i] + "<br>");
    }
}

// todo. 위 배열식을 switch문으로 변환하여 같은 결과를 출력해보기
function arrayFor2(){
    var data = ["변수", "형 변환", "연산자", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = '';
    for(var i = 0; i < data.length; i++){
        switch(i){
            case 0:
                swapNumb = "첫";
                break;
            case 1:
                swapNumb = "두";
                break;
            case 2:
                swapNumb = "세";
                break;
            case 3:
                swapNumb = "네";
                break;
            case 4:
                swapNumb = "다섯";
                break;
            case 5:
                swapNumb = "여섯";
                break;
            case 6:
                swapNumb = "일곱";
                break;
        }
        document.write(swapNumb + "번째 내용 = " + data[i] + "<br>");
    }
}

// ! tune.todo - ECMA Script
function arrayForES6(){
    let data = ["변수", "형 변환", "연산자", "조건문if", "조건문 switch", "반복문 while", "반복문 for"];
    for (let i = 0; i < data.length; i++){
        const element = data[i];
        document.write((i+1) + " 번째 내용 = " + element + "<br>" );
    }

    /*
    for(const key in object){
        if(Object.prototype.hasOwnProperty.call(object,key)){
            const element = object[key];
        }
    }
    arrayFor.forEach(element =>{

    });
    */
}

//case.4 역반복으로 배열 호출하기
function reverseFavorFruit(){
    var arr = ["망고스틴", "씨 없는 수박", "딸기", "망고"];
    for(var i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

//case.5 for에서의 continue
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue; 
        document.write(i + "<br>"); //'사용될 수 없다'에 가까움
    }
    document.write("최종 i = " + i + "<br>");
    // 연산은 정상적으로 이루어지지만 중간 과정은 확인할 수 없음
}

function continueEx(){
    var text = '';
    for(let i = 0; i < 10; i++){
        if(i == 3){
            continue;
        }
        text += i;
    }
    console.log(text);
}

// todo. 과제2 continue를 활용하여 1 ~ 10까지의 총합을 구하되, 짝수들만 더하여 총합을 출력해라.
// ! 결과 2, 6, 12, 20, 30 만 출력되어야 함.
function todoContinue(){
    var evenNumber = 0;
    for(var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        evenNumber += i;
        console.log(evenNumber);
    }
}

// case.6 for에서의 break
function forBreak(){
    for(var i = 1; i <= 10; i++){
        // continue;
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

function breakEx(){
    var i = 0;
    while(i < 100){
        if(i == 3){
            break;
        }
        i += 1; // 자주하는 실수2. 증감문을 while 밖으로 빼버리는 경우
    }
    console.log(i); // 자주하는 실수1. 출력문을 while 안에 넣는 경우 
}

function runBreak(){
    for(var i = 0; true; i++){
        alert(i + "번째 반복문");
        if(confirm("중지할까?")){
            // if(confirm("계속할까?")) > 확인 선택 시 true가 반환되어 break 실행.
            // 논리 연산자 사용으로 식을 복잡하게 만들지 말고 질문을 바꿀 것
            // ex. if(!confirm("계속할까?")) > if(confirm("중지할까?")) 
            break;
        }
    }
}

// 배열값을 변화시키면 자동으로 반응하는 경고창 만들기
function runBreak2(){
    var swapNumb = ["첫", "두", "세", "네", "다섯", "여섯"];
    for(var i = 0; true; i++){
        console.log(swapNumb[i] + "번째 반복문");
        if(i == swapNumb.length - 1){
            break;
        }
    }
    document.write("지정된 배열값 " + swapNumb.length + " 모두 출력 완료");
}

// 다중 for - case. 1 반절 피라미드
function halfPyramid(){
    var star = '';
    // star 변수 선언 및 빈 문자열('')로 초기화: star 변수는 최종적으로 별과 줄 바꿈 문자를 누적해서 담아두는 역할을 하는 듯

    for(var i = 1; i <= 10; i++){
    // 바깥쪽 for 루프 시작: 행(세로줄)을 담당. i는 1부터 시작해서 10까지 1씩 증가하며 총 10번 반복. 각 i 값은 해당 행에 그려질 별의 개수를 결정
    // 첫 번째 바깥쪽 루프 반복 
    // 1. (i = 1) 
    // 2. (1 <= 10은 true)
        for(var j = 0; j < i; j++){
        // 3. 안쪽 for 루프 시작: 현재 행(i번째 행)에 별을 실제로 그리는 역할. 현재 i는 1이므로, j는 0부터 시작해서 j < 1 조건을 만족하는 동안 반복. (즉, j는 0일 때 한 번만 실행)
        // 4. (j = 0)
        // 5. (0 < 1은 true)
            star += '*';
            // 6. star += '*'; star 변수에 "*" 추가. 현재 star는 빈 문자열이므로 이 코드가 실행된 후 star는 "*"로 채워짐
            // 7. j가 1로 증가. 이제 j < 1 (즉, 1 < 1) 조건은 false이므로 안쪽 for 루프 break
        }
        star += '<br>';
        // 8. star += '<br>'; "*"이 담겨있는 star 변수에 HTML 줄 바꿈 태그인 <br>을 추가. 이 코드가 실행된 후 star는 "*<br>"가 됨
        // 9. 바깥쪽 루프의 해당 반복이 끝나고, i가 1 증가하여 2가 됨
        // > 이러한 방식으로 i가 10이 될 때까지 반복
    }
    document.write(star);
    // 모든 루프가 종료된 후 피라미드 형태의 star 전부 출력
}
// 바깥쪽 루프 (i): 피라미드의 각 줄을 만듦. 총 10줄 생성
// 안쪽 루프 (j): 해당 줄에 몇 개의 별을 찍을지 결정. i번째 줄에는 i개의 별을 찍음
// star 변수: 모든 별과 줄 바꿈 문자를 하나의 문자열로 누적

//case.2  역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i >= 1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}

// 완성형 피라미드 그려오기(위 두 개의 상황을 응용)
function Pyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++) {
        for (var j = 10; j >= i; j--) {
            star += '&nbsp&nbsp';
        } // 역반복
        for (var s = 1; s <= (2 * i - 1); s++){
            star += '*';
        } // 정반복
        star += '<br>';
    }
    document.write(star);
}
// 가장 바깥쪽의 for은 가장 마지막에 출력 되어야 하는 아이