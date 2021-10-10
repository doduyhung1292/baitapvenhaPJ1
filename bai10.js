console.log("Đỗ Duy Hưng 20183754 ");

let arr = [];
var k = 1;
var tem;
function TRY(n) {
  for (i = 2; i < n-1; i++) {
    if (n%i == 0 ) {
      arr.push(i);
      TRY(n/i);
      break;
    }
  }
  tem = n;
}
TRY(144);
for (i = 0; i< arr.length; i++) {
    k *=arr[i];
  }
arr.push(tem/k);

if (arr.length == 0) {console.log("...");}
console.log(arr[0]);
var temp = arr[0];
for(i=0; i<arr.length; i++) {
  
  // console.log(temp);
  if (arr[i] !== temp) { 
    temp = arr[i];
    console.log(temp);
  }
}

