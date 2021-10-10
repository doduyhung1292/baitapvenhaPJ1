console.log("Đỗ Duy Hưng 20183754 ");
function isPrime(n) {
  if (n<2) return false;
  for (i= 2; i<n-1; i++) {
    if (n%i == 0) {return false;};
  }

  return true;
}
var j = 1000;
while (j<2000) {
  if (isPrime(j) == true) console.log(j);
  j++;
}
