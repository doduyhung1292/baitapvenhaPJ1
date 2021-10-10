console.log("Đỗ Duy Hưng 20183754 ");
var mul = 1, sum = 0;
var finalSum = 0;
var arr = [];
for (i = 1; i<=10; i++) {
  mul *=i;
  arr.push(mul);
}
for (i = 0; i< arr.length; i++) {
  sum += arr[i];
  finalSum += 1/sum
}
