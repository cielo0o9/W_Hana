$(document).ready(function(){
    // case.1 Axis 움직임
    $("#btnMoveCircle").click(moveCircle);
    // #btnMoveCircle 버튼에 클릭 이벤트를 연결하여, 클릭 시 moveCircle 함수가 실행

    // case.2 x,y Axis 움직임(value가져오기)
    detailMoveCircleExt();
    // detailMoveCircleExt 함수를 즉시 실행하여 #btnDetailMove 버튼에 클릭 이벤트 미리 설정

    // case.3 방향키 조작으로 원 움직이기
    keyControl();
    // keyControl 함수를 즉시 실행하여, 문서 전체에 키보드 입력(keydown)을 감지하는 이벤트 리스너 설정
});

// case 1: prompt를 이용한 원 이동
function moveCircle(){
    var $circle = $(".circle"); 
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요");
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left", xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}

// case 2: input 값을 이용한 원 이동
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}

function circleInit(){
    $circle = $(".circleDetail");
}

function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // console.log("dataType: " + typeof(xpos));
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos);
}

function circleMovCommand(xpos,ypos){
    if(xpos < 0 || xpos > 380 || ypos < 0 || ypos > 380){
        alert("잘못된 수치입니다.");
    }else{
        $circle.css({
            "left": xpos,
            "top": ypos
        });
    }
}

// case 3: 키보드 조작으로 원 이동
function keyControl(){
    var $circle = $(".circleKey");
    var range = 20;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        console.log("입력한 키? : " + typeof(e.keyCode) + e.keyCode);
        // w(Ypos -) : 87 / a(Xpos -) : 65 / s(Ypos +) : 83 / a(Xpos +) : 68
        switch (e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 65:
                currentXpos -= range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 68:
                currentXpos += range;
                break;
        }

        /* 과제
            if(currentXpos >= 0 && currentXpos <= 380){
                $circle.css("left", currentXpos);
            }
            if(currentYpos >= 0 && currentYpos <= 380){
                $circle.css("top", currentYpos);
            }
        */
        
        if(currentXpos <= 0){
            currentXpos = 0;
        }
        if(currentXpos >= 380){
            currentXpos = 380;
        }
        if(currentYpos <= 0){
            currentYpos = 0;
        }
        if(currentXpos >= 380){
            currentYpos = 380;
        }
        $circle.css("left", currentXpos);
        $circle.css("top", currentYpos);
    })
}