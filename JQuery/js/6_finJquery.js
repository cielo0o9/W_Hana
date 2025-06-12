/*
    1. 물고기들의 초기 위치 정렬 - 높이의 배수관계(+margin)를 반복문으로 배치

    2. event 처리 - 물고기 움직임. 움직이는 물고기 위치 표시. 결승선 도달 감지 
        2-1. 물고기 움직임: 무작위로 움직여야함(left-xpos random)
        2-2. 움직임 표시: 지정된 태그에 현재 x좌표를 가져다가 소수점 두 자리 처리를 하고 출력
        2-3. 결승선 감지: 결승선의 x좌표를 기준으로 물고기의 현재 위치가 같거나 큰지를 감지해야함 

    3. 결과 처리 - 정렬 함수를 만들어 비교하고 배열 내 값을 내림차순으로 정렬하여 배열 0번에 위치한 물고기가 1등이 될 수 있도록
*/ 

var $fishList = null;
var timerID = -1; // 0을 사용해도 되는데 차이점을 두기 위해 이렇게 한 것
var $info = null;
var goalLine = 0;
var $fishWidth = 0;
// 이상 변수 선언 및 초기화

$(function(){
    // 그냥 익명함수를 실행하는 것뿐이고 평소 사용하던 ready는 아닌 것
    // 오류가 뜨면 document ready를 사용할 것
    init();
    fishStartPosition();
    fishEvent();
});

function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left  - $fishWidth;
    // position.left 대상의 x좌표를 구해오는 것 - css position이 아니더라도 구할 수 있는 것
    console.log("1. 대상 선언 및 초기화 완료");
}

function fishStartPosition(){
    for(var i = 0; i<$fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i*150)
        });
    }
    console.log("2. 초기 위치 설정완료");
}

function fishEvent(){
    $("#start").click(startGame);
    console.log("3. 게임 시작 함수 불러오기 성공")
}

function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); // 물고기 움직임
            displayFishPositionInfo(); // 움직임 물고기 위치 표시
            checkGoalFish(); // 결승선 도달 감지 
        },200);
        console.log("4. 게임 정상 시작");
        // setinterval 
        // 매개변수 =  고정인자 두 개 (실행할 함수(기명, 익명 상관 없음), m/s 를 기준으로 200 = 0.2초 / 0.2초마다 함수를 실행하라는 것)
        // timerID 변수에 담음으로써 interval 함수
        // setInterval의 counter는 clearInterval
    }
}

// Math. ceil: 매개변수 = num(실수형) >  returnValue = 입력값이 실수일 때 올림 처리(10.2 = 11)
// Math. floor: 매개변수 = num(실수형) >  returnValue = 입력값이 실수일 때 내림 처리(10.2 = 10)
// 실수형일 때만 의미가 있음
// 쿽북
// random: method , 매개변수 없음, 리턴값(반환값): 0 ~ 1 사이 소수 값 30은 나올 수 없는데 ceil을 쓰면 30을 나오게 할 수 있음. ceil이라는 것은 30이라는 값이 나올 수 있는 확률을 만들어 주는 것

function updateFishPosition(){
    for(i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기 움직임 정상");
}

function displayFishPositionInfo(){
    var info = '';
    for(var i = 0; i < $fishList.Length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기: " + $fish.position().left.toFixed(2) + "px <br>";
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 정상");
}

function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i<$fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
            console.log("7. 데이터 저장 성공.");
        }
    }
    if(winnerList.length > 0){
        winnerList.sort(function(a,b){
            return b.position - a.position; 
            // 내림차순 - 진행될 수록 값이 점점 내려가거나(...4,3,2,1), 역순으로 나타나는 것(...d,c,b,a)
            // 오름차순 - 진행될 수록 값이 점점 오르거나(1,2,3,4...), 정순으로 나타나는 것(a,b,c,d...)
            // sort 정렬을 담당하는 함수 (기본 액션: 영어 오름차순 정렬)
            // 각 국에는 저마다 비교 함수가 있음 
        });
        endGame(); //? 게임 종료 함수
        console.log("8. 우승 물고기 선별 완료.");
        alert("우승!" + winnerList[0].index+"번 물고기!");
        // compare function 비교함수 
    }
}

function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("9. 게임 종료");
}