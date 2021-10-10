console.log("Đỗ Duy Hưng 20183754 ");
function isPrime(n) {
  if (n<2) return false;
  for (i= 2; i<n-1; i++) {
    if (n%i == 0) {return false;};
  }

  return true;
}
var k = 2, dem=0;
while (k<100) {
  if (isPrime(k)) {console.log(k); dem +=1;}
  if(dem == 20) break;
  k++;
}
