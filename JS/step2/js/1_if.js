// case.1 현재 시각이 오후인가 오전인가를 알 수 있는 조건문(html <time>에 사용)
function amORpm(){ 
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    // 비교식을 세우기 위해 비교 대상인 "현재 시간"을 불러오는 변수 생성
    console.log("현재 불러와진 값의 자료형은 " + typeof(currentDate) + "이고, 값은 " + currentDate + "입니다" );
    if(currentHour < 12){
        alert("오전입니다."); 
    }else{ // currentHour >= 12
        alert("오후입니다.");
    }
}

// todo. 현재 일자가 말일인가 말일이 아닌가
function lastDayCheck(){
    var todayDate = new Date();
    var todayDay = todayDate.getDate();
    console.log("불러온 값의 자료형은 " + typeof(todayDay) + "이고,  값은 " + todayDay + "입니다.")
    if(todayDay < 30){
        alert("오늘은 말일이 아닙니다.");
    }else{// (todayDay >= 30)
        alert("오늘은 말일입니다.");
    }
}

/* ! 나중에 알아보게 되면 사용할 말일 구하기
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1 , 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}
*/

// 현재 시각이 자신을 기준으로 아침/점심/저녁 먹을 시간 판별해주는 조건식을 세워라
function mealTime(){
    var date = new Date();
    var hours = date.getHours();
    console.log("불러온 값의 자료형은 " + typeof(hours) + "이고, 값은 " + hours + "입니다.")
    if(hours > 9){
        alert("아침 식사");
    }else if(hours > 13){ // else if 조건 설정시 자연히 선행 조건인 if는 제외됨
        alert("점심 식사");
    }else{
        alert("식사 시간이 아닙니다");
    }
}

// case.2 숫자 판별식(양, 음수 판별)
function numbJudgment(){
    var numb = prompt("숫자를 입력하세요.");
    // 형변환 - js비교식에서 문자인 숫자와 숫자를 비교하면 정상비교가 가능함
    if(numb > 0){
        alert("양수입니다.");
    }else if(numb < 0){
        alert("음수입니다.");
    }else{
        alert("올바른 숫자를 입력하세요.");
    }
}

// todo. propmt를 통해 입력된 숫자가 홀수인지 짝수인지 판별하는 조건식
function oddOrEven(){
    var numb = prompt("숫자를 입력하시면 홀, 짝을 구분해 드립니다.");
    if(numb % 2 == 0){
        alert("짝수입니다.");
    }else if(numb % 2 == 1){
        alert("홀수입니다.");
    }else{ // 예외 처리 
        alert("올바른 숫자를 입력하세요.");
    }
}

// case.3 사용자 id를 입력 받아 "Hana"(dataBase.call을 사용할 수 없으니까)와 일치한다면 승인메세지 출력
function userIDCheck(){
    var userID = prompt("사용자 아이디를 입력하세요.")
    if(userID == "Hana"){
        alert("접속 승인");
    }else{
        alert("잘못된 아이디입니다.");
    }
}

// case.3 사용자 id를 "Hana",password "1234"일 경우에만 승인메세지 출력
function userInfoCheck(){
    var userID = prompt("사용자 아이디를 입력하세요.")
    var userPW = prompt("비밀번호를 입력하세요.")
    // 아이디와 비밀번호가 모두 일치 되었을 때
    if(userID == "Hana" && userPW == "1234"){
        alert("접속 승인");
    }else{ // 일치되지 않았을 때
        alert("잘못된 아이디입니다.");
    }
}

/*
const axios = require('axios');
axios.get('/user?ID=Mark')
    .then(function (response){
        console.log(response);
    })// 성공!
    .catch(function(error){
        console.log(error);
    })// 실패(오류)!
    .finally(function(){
        // 상시실행영역 - 보안방화벽, 대조판별식...기타등등..
    });
*/
// 삼항처리

function userInfoCheck(){
    var userID = prompt("사용자 아이디를 입력하세요.")
    var userPW = prompt("비밀번호를 입력하세요.")
    (userID == "Hana" && userPW == "1234")?alert("접속승인"):alert("미승인");
    // 조건이라는 항목 제외하고 나머지는 참 or 예
    // ?는 조건문과 참/거짓을 분별해줌
    // 좌변은 참 우변은 거짓 
    // alert만 사용해야하는 건 아님
}
// case.5 사용자 ID "Hana"와 PASSWORD "1234"의 정보가 틀릴 경우 틀린 정보에 대한 오류 메세지 출력
function userInfoCheck2(){
    // (사용자 편의를 봐주면 봐줄수록 데이터 보안이 취약해짐)
    var userID = prompt("사용자 아이디를 입력하세요.")
    var userPW = prompt("비밀번호를 입력하세요.")
    if(userID == "Hana" && userPW == "1234"){
        alert("Hana님으로 확인 되었습니다.");
    }else if(userID != "Hana"){ // 아이디가 틀릴 경우
        alert("잘못된 아이디입니다.");
    }else if(userPW != "1234"){ // 패스워드가 틀릴 경우
        alert("잘못된 비밀번호입니다.");
    }else{
        alert("미승인");
    }
}

// todo. 1 각 수를 프롬프트를 통해 입력받아 해당하는 조건의 메시지를 출력하라.
// ? 1이 입력될 경우 "1등! 10억!", 2가 입력될 경우 "2등! 5천!", 3이 입력될 경우 "3등! 3백!", 외 나머지 "낙첨되었습니다."
function lotto(){
    var lottoNumber = prompt("숫자를 입력하세요.");
    if(lottoNumber == 1){
        alert("1등! 10억!");
    }else if(lottoNumber == 2){
        alert("2등! 5천!");
    }else if(lottoNumber == 3){
        alert("3등! 3백!");
    }else{
        alert("낙첨ㅠㅅㅠ");
    }
}

// todo. 2 다음 코드를 실행해보고 결과를 확인한 후 간소화 하시오. (? if x 1, else x 1로)
function btnMouseEx(){
    var clickBtn = window.prompt("누르실 마우스 버튼을 입력하세요 (왼쪽,오른쪽,가운데)");
    if(clickBtn=="오른쪽"){
        console.log("오른쪽!");
    }else if(clickBtn=="왼쪽"){
        console.log("왼쪽!");
    }else if(clickBtn=="가운데"){
        console.log("가운데!");
    }else{
        console.log("올바른값을 입력하세요.");
    }
}

// todo. 3 다음 세 과목의 점수를 prompt로 입력 받고 평균을 구한 뒤(소수점은 두자리에끊어야함) 수,우,미,양,가 등급으로 나누어 출력해라.
function avgScore(){
    var koreanScore = prompt("국어 점수를 입력하세요.");
    var englishScore = prompt("영어 점수를 입력하세요.");
    var mathScore = prompt("수학 점수를 입력하세요.");
    var avg = koreanScore + englishScore + mathScore;
    // 수 - 90점 이상
    // 우 - 89점 이하(min: 80)
    // 미 - 79점 이하(min: 70)
    // 양 - 69점 이하(min: 60)
    // 가 - 59점 이하(min: 0)
}