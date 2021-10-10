console.log("Đỗ Duy Hưng 20183754 ");

var arr = [1, 4, 5, 6, 7, 6, 8, 4];
function swap(arra) {
  var random1 = Math.floor(Math.random()*arr.length);
  var random2 = Math.floor(Math.random()*arr.length);
  temp = arr[random1];
  arr[random1] = arr[random2];
  arr[random2] = temp;
  console.log(arra);
} 
swap(arr);
