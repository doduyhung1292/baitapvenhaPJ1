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
TRY(100);
for (i = 0; i< arr.length; i++) {
    k *=arr[i];
  }
arr.push(tem/k);
console.log(arr);
