$(document).ready(function(){
    toggleCheck(); // 체크박스 기능 초기화
    toggleTodo(); // 비밀번호 보이기/숨기기 기능 초기화
    tabUI(".tabMenu li", ".tabPage"); // 탭 UI 기능 초기화
    // tabUI(".tabMenu li", ".tabPage");
    // tabUI(".tabMenu li", ".tabPage");
    accControl(".accComponent li h3"); // 아코디언 UI 기능 초기화
});

// toggleCheck() - 커스텀 체크박스 기능
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false; //? 상태변수
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}

// toggleTodo() - 비밀번호 보이기/숨기기 토글
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}

// tabUI() - 재사용 가능한 탭 UI 기능(쇼핑몰 카테고리)
function tabUI(cliker, target){ // 1. 매개변수
    $(cliker).click(function(){
        var activeTab = $(this).attr("data-tabNumb"); // 2. this 키워드
        console.log(activeTab);
        $(cliker).removeClass("activated"); //add의 반의어 remove
        $(this).addClass("activated");
        $(target).removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });

    /*
    1. function tabUI(cliker, target: 매개변수
        함수 내부에 선택자를 특정($(".tabMenu li"))하면 이 함수는 오직 그 탭 메뉴에서만 작동. 하지만 cliker, target이라는 매개변수를 사용함으로써, 이 함수를 호출할 때마다 다른 선택자(".otherMenu button", ".otherContents")를 전달하여 어떤 탭 UI에든 재사용할 수 있는 범용적인 함수로 사용 가능
    2. $(this): this 키워드
        - this: jQuery 이벤트 핸들러 내에서 this는 이벤트를 발생시킨 바로 그 HTML 요소를 가리킴.   
            ex. 3개의 <li> 탭 중 두 번째 것을 클릭했다면, this는 그 두 번째 <li>
    */ 
}

// accControl() - 간단한 아코디언 기능
function accControl(target){
    // 실무에서는 매개변수를 이렇게 명사로 사용하지 않고 알파벳을 사용
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}