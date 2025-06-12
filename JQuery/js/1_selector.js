$(document).ready(function(){
    // 매개변수로 익명함수 전달
    case1Test();
    // case.2
    $("#btnCheck").click();
    // case.3
    $("#btnAddBorder").click(addBorder);
    // todo
    $("#btnTextChange").click(textChange);
});

function case1Test(){
    var $divs = $("div");
    $divs.css("background-color", "red");
}

function sayHello(){
    alert('안녕?');
}

function addBorder(){
    $("#panel").css("border", "5px solid black");
}

function textChange(){
    // $("#panel2").css("font-size", "20px");
    // $("#panel2").css("font-weight", "500");
    // $("#panel2").css("color", "white");
    // $("#panel2").css("font-size", "20px", "font-weight", "500", "color", "white"); (x)
    $("#panel2").css({
        "font-size": "25px",
        "font-weight": "30px",
        "color": "white",
        "line-height": "31px"
    });
}