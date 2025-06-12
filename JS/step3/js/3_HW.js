//todo.1 구구단 숫자를 입력받아 출력하는 for문.
function gugudan(){
  var inputNumber = Number(window.prompt("구구단 숫자를 입력하세요."));
  var outgugudan = '';
    for(var i = 1; i < 10; i++){
        outgugudan += inputNumber + " x " + i + " = " + inputNumber * i + "<br>";
    }
    document.write(outgugudan);
}


// todo.2 배열의 총 합을 구하기. var data = [10,20,30,40,50];
function arraySum(){
  var arrdata = [10,20,30,40,50];
  var sumValue = 0;
  for(i = 0; i < arrdata.length; i++){
    sumValue += arrdata[i];
  }
  console.log("배열의 총 합: " + sumValue);
}