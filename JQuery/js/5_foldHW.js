/* 
  this : 현재 실행되고 있는 코드의 주인 또는 문맥을 가리키는 특별한 키워드(지금 이 일을 시킨 주인이 누구지?를 생각할 것)
  this의 황금률 (The Golden Rule)
  - this가 무엇을 가리키는지는 함수가 정의된 '위치'가 아닌 함수의 '호출 방식' 에 따라 결정됨. this는 "이 함수의 소유자(owner) 또는 실행 문맥(context)은 누구인가?"라는 질문에 대한 답
  this에 대한 자세한 설명:
  JavaScript에서 this 키워드는 함수가 호출되는 방식(컨텍스트)에 따라 가리키는 대상이 달라지는 특별한 키워드
  jQuery 이벤트 핸들러에서의 this:
  jQuery를 사용하여 요소에 이벤트 핸들러(예: .click(), .hover(), .on())를 등록할 때, 해당 이벤트가 발생하여 핸들러 함수가 실행되면 그 함수 내부에서 this는 이벤트를 발생시킨 DOM 요소(HTML 요소 그 자체)를 가리킴
  예시 코드 $(cliker).click(function(){ ... });에서:
  만약 cliker가 ".tab-button" 클래스를 가진 여러 개의 버튼들이라면, 사용자가 그 중 어떤 특정 버튼을 클릭했을 때, 그 클릭된 바로 그 버튼이 this가 됨
*/

// .eq() - .eq()는 jQuery에서 선택된 여러 개의 HTML 요소들(컬렉션) 중에서 특정 순서(인덱스)에 있는 단 하나의 요소를 선택하는 메서드

/* 
  목표 - 버튼을 누르면 이미지 그리드 레이아웃이 바뀌게 할 것
  - 10개의 버튼 중 원하는 열의 버튼을 누르면
  - 이미지들이 해당 열 개수에 맞춰 재배치 되어야 함
  - 이미지는 컨테이너에 꽉 차도록 크기 조절 필요
*/

/*
  그렇다면 필요한 건?
  1. 버튼을 클릭하는 걸 알아차려야함 
  2. 몇 열 버튼을 눌렀는지 알아내야함 
  3. 각 이미지가 배치될 좌표를 계산해야함 
  4. 각 이미지의 너비와 높이도 계산해서 바꿔주어야 함
*/

/*
  작동 조건 - 버튼을 클릭해야 작동함
  $('[class^="col"]').click(function(){});
*/

/*
  이미지의 위치와 크기를 계산하기 위해 필요한 정보
  1. 몇 열을 선택했는지 parseInt($(this).text())
  2. 기준이 될 container의 너비 $container.width()
  3. 움직여야할(제어) 이미지들 $('#imgContainer img')
  4. 이미지의 총 개수() $images.length
*/

$(document).ready(function(){
    gallery();
});

function gallery() {
    $('[class^="col"]').click(function() { //작동 조건
        var columns = parseInt($(this).text());
        // this > button (이벤트를 발생시킨 바로 그 요소) => 그 요소의 텍스트 당김 => 그것을 정수형 반환하여 열 개수
        // replace 메서드 
        // 가장 쉽게 사용할 수 있는 경우는 쇼핑몰 이미지 바꾸기
        //  src .png를 찾아서 _hover.png로 바꾸면 됨
        var $container = $('#imgContainer');
        var img = $('#imgContainer img');
        var containerWidth = $container.width();
        var newImgSize = containerWidth / columns;
        var imgCount = img.length;
        for (let i = 0; i < imgCount; i++) {
            var image = img.eq(i);
            var unit = i % columns; 
            // 호수 - 1 ~ 열수 필요(나머지)
            var floor = parseInt(i / columns); 
            // 층수 - 0, 1 필요(몫)
            var xpos = unit * newImgSize;
            var ypos = floor * newImgSize;
            image.css({
                "left": xpos,
                "top": ypos,
                "width": newImgSize,
                "height": newImgSize
            });
        }
    });
}
